import React from "react";

const Menu = ({ menu }) => {
  const { name, image, price, text } = menu;
  return (
    <article className="menu">
      <div className="item">
        <div className="img-container">
          <img className="menu-img" src={image} alt={name} />
        </div>
        <div className="menu-desc">
          <div className="menu-head">
            <h3 className="item-name">{name}.</h3>
            <p className="price">{price}$</p>
          </div>
          <div className="menu-text">
            <p className="text">{text}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Menu;
