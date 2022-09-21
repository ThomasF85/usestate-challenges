import { useState } from "react";
import "./FavoriteColor.css";

function FavoriteColor({ name }) {
  const [color, setColor] = useState("blue");

  return (
    <section className="favorite-color">
      <h2>{name}'s favorite color is: </h2>
      <div className={`favorite-color__box ${color}`}>{color}</div>
      {color === "red" && <p>Yes, red is the best color!!!</p>}
      <button
        onClick={() => {
          setColor("blue");
        }}
        className="favorite-color__button"
        type="button"
      >
        blue
      </button>
      <button
        onClick={() => {
          setColor("red");
        }}
        className="favorite-color__button"
        type="button"
      >
        red
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
        className="favorite-color__button"
        type="button"
      >
        green
      </button>
    </section>
  );
}

export default FavoriteColor;
