import React from "react";
import "./App.css";

const Items = ({ items }) => {
  return (
    <div className="menu-items-container">
      <section className="menu-items">
        {items.map((item) => {
          const { id, img, desc, title, price } = item;
          return (
            <article key={id} className="item">
              <img
                className="menu-image"
                src={img}
                width="100px"
                height="100px"
              />
              <div className="item-description">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <div className="price">
                <h3>{`$${price}`}</h3>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Items;
