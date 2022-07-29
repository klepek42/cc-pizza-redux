import React from "react";

import PizzaList from "./components/PizzaList";
import "./App.css";

async function App() {
  try {
    const response = fetch(
      "https://cc-pizza-redux-default-rtdb.europe-west1.firebasedatabase.app/pizza.json"
    );

    // @ts-ignore
    if (!response.ok) {
      throw new Error("Fehler beim Laden der Pizzen.");
    }

    // @ts-ignore
    const data = await response.json();

    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }

  return (
    <div className="App">
      <PizzaList />
    </div>
  );
}

export default App;
