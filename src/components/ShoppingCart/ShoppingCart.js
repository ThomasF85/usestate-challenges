import ShoppingItem from "../ShoppingItem/ShoppingItem";

function ShoppingCart() {
  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main>
        <ShoppingItem name="Banana" price={0.6} />
        <ShoppingItem name="Olive oil" price={9.5} />
        <ShoppingItem name="Mountain Bike" price={990} />
      </main>
    </>
  );
}

export default ShoppingCart;
