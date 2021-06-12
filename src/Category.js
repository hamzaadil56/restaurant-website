import React from "react";

const Category = ({ categories, filterItems }) => {
  return (
    <div className="menu-buttons">
      {categories.map((category, i) => {
        return (  
          <button
            className="menu-button"
            key={i}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
