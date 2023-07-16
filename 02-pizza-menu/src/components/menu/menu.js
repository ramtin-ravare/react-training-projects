import Pizza from "./pizza";
import { pizzaData } from "../../data";

export default function Menu() {
  const pizzaNum = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaNum > 0 ? (
        <>
          <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious. </p>
          <ul className="pizzas">
            {
              pizzaData.map(pizza => (
                <Pizza
                  pizza={pizza}
                  key={pizza.name}
                />
              ))
            }
          </ul>
        </>
      ) : <p>We're still working on our menu. Please comeback later :)</p>}
    </main>
  );
}