import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./cartWidget/cartWidget";
import "./navbar.css";
import { loadCategories } from "../../services/firebase/firestore";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

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
        {categories.length > 0
          ? categories.map((el) => {
              return (
                <NavLink
                  to={"/category/" + el.catId}
                  className="nav-link"
                  key={el.catId}
                >
                  {el.categoryName}
                </NavLink>
              );
            })
          : null}
        <NavLink to={"/admin"} className="nav-link">
          admin
        </NavLink>
        <CartWidget />
      </div>
    </div>
  );
};
export default Navbar;
