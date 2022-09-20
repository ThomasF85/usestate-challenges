import "./FavoriteColor.css";

function FavoriteColor() {
  return (
    <main>
      <h2 className="blue">My favorite color is: </h2>
      <button className="favorite-color__button" type="button">
        blue
      </button>
      <button className="favorite-color__button" type="button">
        red
      </button>
      <button className="favorite-color__button" type="button">
        green
      </button>
    </main>
  );
}

export default FavoriteColor;
