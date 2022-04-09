import { bringMLList } from "../asyncmock";
import { useState } from "react";

import "./itemDetailContainer.css";

const ItemDetailContainer = ({ mensaje }) => {
  const [products, setProducts] = useState(undefined);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
    bringMLList(search)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProducts(res.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(products);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input onChange={handleInput} placeholder="Searchbar" />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default ItemDetailContainer;
