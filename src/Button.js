import React from "react";

const Button = ({ categories, filterMenu }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            className="btn"
            key={index}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};

export default Button;
