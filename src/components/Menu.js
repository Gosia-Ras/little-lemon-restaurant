import data from "../dishesData.json";
import "../styles/Menu.css";

function Menu() {
  const dishTypes = Array.from(new Set(data.dishes.map((dish) => dish.type)));
  return (
    <section className="menu">
      <h2>Order for delivery!</h2>
      <ul>
        {dishTypes.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <div className="dishes">
        {data.dishes.map((dish) => (
          <div key={dish.id} data-type={dish.type}>
            <img src={dish.photo} alt="Greek salad" />
            <div>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p>{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
