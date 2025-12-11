import React, { useContext } from "react";
import "./FoodItem.css";
import assets from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt={name}
        />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.minus_icon}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.plus_icon}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-name-rating">
        <p className="name">{name}</p>
        <img src={assets.star} alt="" />
      </div>

      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">{price} ETB</p>
    </div>
  );
};

export default FoodItem;
