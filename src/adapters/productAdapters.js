export const productAdapterFirestore = (doc)=>{
    const product = doc.data()

    const adaptedProduct = {
        productID: doc.id,
        productName: product.productName,
        description: product.description,
        pictureURL: product.pictureURL,
        price: product.price,
        stock: product.stock,
        size: product.size,
    }

    return adaptedProduct
}