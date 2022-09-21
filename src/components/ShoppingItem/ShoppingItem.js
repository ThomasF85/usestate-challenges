import { useState } from "react";
import "./ShoppingItem.css";

function ShoppingItem({ name, price }) {
  const [amount, setAmount] = useState(1);

  return (
    <section className="item">
      <h2>{name}</h2>
      <p>price: {price}</p>
      <p>amount: {amount}</p>
      <p>total: {price * amount}</p>
      <button
        onClick={() =>
          setAmount((previousAmount) =>
            previousAmount > 0 ? previousAmount - 1 : 0
          )
        }
        className="item__button"
        type="button"
      >
        -
      </button>
      <button
        onClick={() => setAmount((previousAmount) => previousAmount + 1)}
        className="item__button"
        type="button"
      >
        +
      </button>
    </section>
  );
}

export default ShoppingItem;
