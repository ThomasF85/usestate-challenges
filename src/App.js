import "./App.css";
import ActiveToggle from "./components/ActiveToggle/ActiveToggle";
import FavoriteColor from "./components/FavoriteColor/FavoriteColor";
import Hungry from "./components/Hungry/Hungry";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Hungry />
      <FavoriteColor />
      <ActiveToggle />
      <ShoppingCart />
    </div>
  );
}

export default App;
