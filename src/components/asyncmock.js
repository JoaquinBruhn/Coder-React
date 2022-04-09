const data = [
  {
    productName: "black t-shirt",
    productID: "top123",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "top",
    price: 800,
    stock: 7,
    size: "M",
  },
  {
    productName: "red sweater",
    productID: "top456",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "top",
    price: 1100,
    stock: 12,
    size: "s",
  },
  {
    productName: "long sleeve blue t-shirt",
    productID: "top789",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "top",
    price: 900,
    stock: 11,
    size: "l",
  },
  {
    productName: "black shorts",
    productID: "pant741",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "pants",
    price: 600,
    stock: 14,
    size: "s",
  },
  {
    productName: "blue jeans",
    productID: "pant852",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "pants",
    price: 1200,
    stock: 9,
    size: "M",
  },
  {
    productName: "white socks",
    productID: "shoe159",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "shoes",
    price: 240,
    stock: 13,
    size: "adjustable",
  },
  {
    productName: "black sneakers",
    productID: "shoe753",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "shoes",
    price: 1150,
    stock: 7,
    size: "40",
  },
];

export const bringList = (status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve(data);
      } else {
        reject("server is down");
      }
    }, 3000);
  });
};

export const bringMLList = (search) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`));
      } catch (error) {
        reject("server is down");
      }
    }, 2000);
  });
};

export default data;
