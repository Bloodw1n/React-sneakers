import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import Card from "../componets/Card";

const Favorites = () => {
  const { favorites, onAddToFavorite } = useContext(AppContext);

  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
