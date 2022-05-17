import { firestoreDb } from ".";
import {
  addDoc,
  getDocs,
  getDoc,
  collection,
  documentId,
  doc,
  query,
  where,
  orderBy,
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import {
  productAdapterFirestore,
  categoryAdapterFirestore,
  buyerDataAdapterFirestore,
} from "../../adapters/productAdapters";

export const loadCategories = () => {
  return new Promise((resolve, reject) => {
    const colRef = query(collection(firestoreDb, "categories"), orderBy("order", "asc"));

    getDocs(colRef)
      .then((response) => {
        const cat = response.docs.map((doc) => {
          return categoryAdapterFirestore(doc);
        });
        resolve(cat);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const loadProducts = (categoryID) => {
  return new Promise((resolve, reject) => {
    const colRef =
      categoryID !== undefined
        ? query(collection(firestoreDb, "products"), where("category", "==", categoryID))
        : query(collection(firestoreDb, "products"), orderBy("productName", "asc"));

    getDocs(colRef)
      .then((response) => {
        const prods = response.docs.map((doc) => {
          return productAdapterFirestore(doc);
        });
        resolve(prods);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const loadDetail = (itemId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(firestoreDb, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const prod = productAdapterFirestore(response);
        resolve(prod);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const startPurchase = (buyerData, cart, totPrice) => {
  const purchaseIds = cart.map((prod) => prod.productID);

  const objOrder = {
    items: cart,
    buyer: buyerDataAdapterFirestore(buyerData),
    total: totPrice,
    date: Timestamp.fromDate(new Date()),
  };

  return new Promise((resolve, reject) => {
    const batch = writeBatch(firestoreDb);
    const colRef = collection(firestoreDb, "products");
    const docRef = query(colRef, where(documentId(), "in", purchaseIds));
    const outOfStock = [];

    getDocs(docRef)
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = productAdapterFirestore(doc);
          const prodQuantity = objOrder.items.find((prod) => prod.productID === dataDoc.productID)?.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push(dataDoc);
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const ordersRef = collection(firestoreDb, "orders");
          console.log(objOrder);
          return addDoc(ordersRef, objOrder);
        } else {
          reject({
            errName: "outOfStock",
            OOSproducts: outOfStock,
          });
        }
      })
      .then((doc) => {
        if (doc !== undefined) {
          batch.commit();
          resolve(doc.id);
        } else {
          resolve("Missing stock");
        }
      });
  });
};
