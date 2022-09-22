import "./ShoppingItem.css";

function ShoppingItem({ name, price, amount }) {
  return (
    <section className="item">
      <h2>{name}</h2>
      <p>price: {price}</p>
      <p>amount: {amount}</p>
      <p>total: {price * amount}</p>
      <button className="item__button" type="button">
        -
      </button>
      <button className="item__button" type="button">
        +
      </button>
    </section>
  );
}

export default ShoppingItem;
