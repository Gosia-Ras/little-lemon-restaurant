import "../../styles/ImageGrid.css";
import bruschetta from "../../assets/bruschetta.jpg";
import restaurant from "../../assets/restaurant.jpg";
import chef from "../../assets/Mario and Adrian b.jpg";

function ImageGrid() {
  return (
    <section className="image-grid">
      <img src={bruschetta} alt="bruschetta" />
      <img src={chef} alt="bruschetta" />
      <img src={restaurant} alt="bruschetta" />
    </section>
  );
}

export default ImageGrid;
