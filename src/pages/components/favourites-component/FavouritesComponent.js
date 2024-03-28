import React from "react";

const LOCALSTORE_KEY = "favourites";

const FavouritesComponent = () => {
  const favourites = JSON.parse(
    window.localStorage.getItem(LOCALSTORE_KEY) || "[]"
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Favourite Goods</h2>
      {favourites.map((good) => (
        <div key={good.id}>
          <p>Name: {good.name}</p>
          <p>Description: {good.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavouritesComponent;
