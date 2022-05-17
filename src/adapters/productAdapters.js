export const productAdapterFirestore = (doc) => {
  const product = doc.data();

  const adaptedProduct = {
    productID: doc.id,
    productName: product.productName,
    description: product.description,
    pictureURL: product.pictureURL,
    price: product.price,
    stock: product.stock,
    size: product.size,
  };

  return adaptedProduct;
};

export const categoryAdapterFirestore = (doc) => {
  const category = doc.data();

  const adaptedCategory = {
    catId: doc.id,
    categoryName: category.categoryName,
    order: category.order,
  };

  return adaptedCategory;
};

export const buyerDataAdapterFirestore = (obj) => {
  const adaptedBuyerData = {
    name: obj.name,
    phone: obj.phone,
    email: obj.email,
    address: obj.address,
  };
  return adaptedBuyerData;
};
