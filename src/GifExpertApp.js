import React, { useState } from "react";

import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  // const categories = ["One Punch", "Doraemon", "Dragon Ball", "Samurai X"];
  const [categories, setcategories] = useState([
    "One Punch",
    "Doraemon",
    "Dragon Ball",
    "Samurai X",
  ]);
  // const handleAdd = () => {
  //   // setcategories([...categories, "HunterXHunter"]);
  //   setcategories((cats) => [...cats, "HunterXHunter"]);
  // };
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
