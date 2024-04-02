import React, { useState } from "react";
import data from "../dishesData.json";
import "../styles/Menu.css";

function Menu() {
  const [selectedType, setSelectedType] = useState(null);
  const dishTypes = Array.from(new Set(data.dishes.map((dish) => dish.type)));

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <section className="menu">
      <h3>Order for delivery!</h3>
      <ul>
        <li onClick={() => setSelectedType(null)}>Show All</li>
        {dishTypes.map((type) => (
          <li key={type} onClick={() => handleTypeClick(type)}>
            {type}
          </li>
        ))}
      </ul>
      <div className="dishes">
        {data.dishes
          .filter((dish) => selectedType === null || dish.type === selectedType)
          .map((dish) => (
            <div key={dish.id} data-type={dish.type} className="dish">
              <div>
                <h4>{dish.name}</h4>
                <p className="description">{dish.description}</p>
                <p className="price">${dish.price}</p>
              </div>
              <div className="image-container">
                <img src={dish.photo} alt={dish.name} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Menu;
