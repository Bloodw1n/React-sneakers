import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "./hooks/useCart";

const Header = (props) => {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img src="img/header.png" width="40px" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers </h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="img/basket.svg" width="18px" alt="basket" />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              src="img/like.svg"
              width="18px"
              alt="like"
              className="mr-30 cu-p"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img
              src="img/user.svg"
              width="18px"
              alt="user"
              className="mr-30 cu-p"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
