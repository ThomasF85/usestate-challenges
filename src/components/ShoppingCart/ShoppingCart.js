import { useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import "./ShoppingCart.css";

const items = [
  {
    id: "87c87fa",
    name: "Banana",
    price: 0.6,
  },
  {
    id: "87c87fa",
    name: "Olive oil",
    price: 9.5,
  },
  {
    id: "87c87fa",
    name: "Mountain Bike",
    price: 990,
  },
];

function ShoppingCart() {
  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { item, price } = Object.fromEntries(formData);

    alert(`Add an ${item} for the price of ${price}`);
  }

  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main>
        <section className="cart__items">
          {items.map((item) => (
            <ShoppingItem key={item.id} name={item.name} price={item.price} />
          ))}
        </section>
        <form className="form" onSubmit={sendForm}>
          <label htmlFor="item">New Shopping item:</label>
          <input type="text" name="item" id="item" />
          <label htmlFor="price">price:</label>
          <input type="number" name="price" id="price" />
          <button className="form__submit-button" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default ShoppingCart;
