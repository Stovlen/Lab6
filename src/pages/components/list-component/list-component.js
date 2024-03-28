import React from "react";
import ShopCard from "../Shop-card/ShopCard";

const ListComponent = () => {
  const shopList = [
    {
      id: 1,
      name: "Яблуко",
      description: "10 грн",
      img: require("../../../imgs/13.jpg"),
    },
    {
      id: 2,
      name: "Слива",
      description: "15 грн",
      img: require("../../../imgs/12.jpg"),
    },
    {
      id: 3,
      name: "Апельсин",
      description: "20 грн",
      img: require("../../../imgs/11.jpg"),
    },
  ];
  return (
    <section className="app">
      <header className="app-header"></header>
      <main>
        <section className="container">
          <div className="row">
            {shopList.map((good) => {
              return (
                <div className="col-12 col-lg-3 " key={good.id}>
                  <ShopCard card={good} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </section>
  );
};

export default ListComponent;
