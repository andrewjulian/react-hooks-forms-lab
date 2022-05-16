import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid } from "uuid";


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [itemName, setItemName] = useState("") ;
  const [itemCategory, setCategoryName] = useState("Produce");

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSetItemsUpdate(event){
    setItems()
  }

  function handleSubmit(event){
    event.preventDefault()
    setItems();
  }

  function handleSubmit(event, element) {
    event.preventDefault();
    setItems([...items, element]);
  }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleSubmit} holdingArray={newItem} />
    </div>
  );
}

export default App;
