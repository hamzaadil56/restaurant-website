import { useState } from "react";
import "./App.css";
import { items } from "./data";
import Items from "./Items";
import Category from "./Category";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    const newItems = items.filter((item) => category === item.category);
    setItems(newItems);
    if (category === "all") {
      setItems(items);
    }
  };
  return (
    <div id="menu" className="menu-container">
      <div className="menu-header">
        <div className="menu-headings">
          <h4>OUR MENU</h4>
          <h1>Our selection of foods with quality taste</h1>
        </div>
      </div>
      <section className="menu-app">
        <Category filterItems={filterItems} categories={categories} />
        <Items items={menuItems} />
      </section>
    </div>
  );
};

export default Menu;
