import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const numPizzas = pizzaData.length;

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? (
            <span> SOLD OUT</span>
          ) : (
            <span>{pizzaObj.price}</span>
          )}
        </span>
      </div>
    </li>
  );
}
function Header() {
  return (
    <header className="header">
      <h1> Oyin's Pizza Place</h1>;
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} />
          ))}
        </ul>
      ) : (
        <p> we're currently working on our menu</p>
      )}
    </main>
  );
}

function Footer() {
  const openHour = 12;
  const currentHour = new Date().getHours();
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  return (
    <footer className="Footer">
      <div className="order">
        {isOpen ? (
          <p> We're Currently Opened</p>
        ) : (
          <p> We are Closed till {openHour}</p>
        )}
        <button className="btn"> Order</button>;
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
