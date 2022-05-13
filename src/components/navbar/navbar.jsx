import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/cartContext";
import CartWidget from "./cartWidget/cartWidget";
import "./navbar.css";
import { loadCategories } from "../../services/firebase/firestore";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const { checkCart } = useContext(CartContext);

  useEffect(() => {
    loadCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="navbar">
      <NavLink className="logo" to="/">
        <h1>ataraxia</h1>
      </NavLink>
      <div className="menu">
        <button onClick={checkCart}>check cart</button>
        {categories.length > 0
          ? categories.map((el) => {
              return (
                <NavLink to={"/category/" + el.catId} key={el.catId}>
                  {el.categoryName}
                </NavLink>
              );
            })
          : null}
        <NavLink to={"/admin"}>Admin</NavLink>
        <CartWidget />
      </div>
    </div>
  );
};
export default Navbar;
