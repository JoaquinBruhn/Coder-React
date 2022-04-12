const data = [
  {
    productName: "black t-shirt",
    productID: "top123",
    description: "It is a black T-shirt. Generic T-shirt for use in most places.",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "tops",
    price: 800,
    stock: 7,
    size: "M",
  },
  {
    productName: "red sweater",
    productID: "top456",
    description: "It is a red sweater. Comfy for winter and family meet-ups.",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "tops",
    price: 1100,
    stock: 12,
    size: "s",
  },
  {
    productName: "long sleeve blue t-shirt",
    productID: "top789",
    description: "It is a long sleeved blue T-shirt. It's design is good for a lot of situations.",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "tops",
    price: 900,
    stock: 11,
    size: "l",
  },
  {
    productName: "black shorts",
    productID: "pant741",
    description: "It is a pair of black shorts. Nice to wear on summer.",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "pants",
    price: 600,
    stock: 14,
    size: "s",
  },
  {
    productName: "blue jeans",
    productID: "pant852",
    description: "It is a pair of blue jeans. Good for every situation.",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "pants",
    price: 1200,
    stock: 9,
    size: "M",
  },
  {
    productName: "white socks",
    productID: "shoe159",
    description: "It is a pair of white socks. Comfortable for winter.",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "shoes",
    price: 240,
    stock: 13,
    size: "adjustable",
  },
  {
    productName: "black sneakers",
    productID: "shoe753",
    description: "It is a pair of black sneekers. Keeps the foot comfortable on most places while looking good.",
    pictureURL: "https://via.placeholder.com/350x150",
    category: "shoes",
    price: 1150,
    stock: 7,
    size: "40",
  },
];

export const bringList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject("server is down");
      }
    }, 3000);
  });
};

export const bringCategory = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.length > 0) {
        const category = data.filter(ob => ob.category === params)
        resolve(category);
      } else {
        reject("server is down");
      }
    }, 2000);
  });
};

export const bringDetail = (detailedProduct) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.length > 0) {
        const product = data.filter(ob => ob.productID === detailedProduct.itemID)
        resolve(...product);
      } else {
        reject("Item not found");
      }
    }, 3000);
  });
};


export default data;
