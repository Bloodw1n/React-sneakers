import React from "react";

import Card from "../componets/Card";

const Home = ({
  items,
  searchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchInput,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );

    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
