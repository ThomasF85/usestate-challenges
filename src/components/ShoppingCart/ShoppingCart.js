import { useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import "./ShoppingCart.css";

const initialItems = [
  {
    id: "87c87fae",
    name: "Banana",
    price: 0.6,
    amount: 0,
  },
  {
    id: "b7fae3a9",
    name: "Olive oil",
    price: 9.5,
    amount: 0,
  },
  {
    id: "7fa8dd21",
    name: "Mountain Bike",
    price: 990,
    amount: 0,
  },
];

function ShoppingCart() {
  const [items, setItems] = useState(initialItems);

  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { item, price } = Object.fromEntries(formData);

    alert(`Add an ${item} for the price of ${price}`);
  }

  function increaseItemAmount(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
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
            <ShoppingItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onIncrease={() => increaseItemAmount(item.id)}
            />
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
