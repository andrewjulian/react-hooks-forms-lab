import React , {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("") ;
  const [itemCategory, setCategoryName] = useState("Produce");

  let newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };

  //update name state
  function handleItemName(event){
    setItemName(event.target.value)
  }

  //update category state
  function handleCategory(event){
    setCategoryName(event.target.value)
  }

  //create object and call, callback
  function handleSubmit(event){
    event.preventDefault();
    newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
