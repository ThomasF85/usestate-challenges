import { useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import "./ShoppingCart.css";

const items = [
  {
    id: "87c87fae",
    name: "Banana",
    price: 0.6,
  },
  {
    id: "b7fae3a9",
    name: "Olive oil",
    price: 9.5,
  },
  {
    id: "7fa8dd21",
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
        <p className="cart__sum">SUM: ??</p>
        <section className="cart__items">
          {items.map((item) => (
            <ShoppingItem key={item.id} name={item.name} price={item.price} />
          ))}
        </section>
        <form className="form" onSubmit={sendForm}>
          <label htmlFor="item">New Shopping item:</label>
          <input type="text" name="item" id="item" />
          <label htmlFor="price">price:</label>
          <input type="number" step=".1" name="price" id="price" />
          <button className="form__submit-button" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default ShoppingCart;
