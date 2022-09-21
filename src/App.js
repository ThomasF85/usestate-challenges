import "./App.css";
import ActiveToggle from "./components/ActiveToggle/ActiveToggle";
import ColorPage from "./components/ColorPage/ColorPage";
import Hungry from "./components/Hungry/Hungry";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      {/* <ColorPage /> */}
      {/* <Hungry /> */}
      <ActiveToggle />
      <ShoppingCart />
    </div>
  );
}

export default App;
