import React, { useContext } from "react";
import { AppContext } from "../App";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} src={image} alt="empty-cart" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenBtn">
        <img src="/img/arrow.svg" /> Вернуться назад
      </button>
    </div>
  );
};

export default Info;
