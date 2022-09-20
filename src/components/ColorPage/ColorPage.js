import FavoriteColor from "../FavoriteColor/FavoriteColor";
import "./ColorPage.css";

function ColorPage() {
  return (
    <>
      <header>
        <h1>ColorPage</h1>
      </header>
      <main className="color-page">
        <FavoriteColor name="Mario" />
        <FavoriteColor name="Luigi" />
        <FavoriteColor name="Bowser" />
      </main>
    </>
  );
}

export default ColorPage;
