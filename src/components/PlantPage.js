import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({handleDelete, updatePrice, handlePost, plantData, setPlantData, input, setInput, toggle, setToggle}) {
  return (
    <main>
      <NewPlantForm  toggle={toggle} handlePost={handlePost} setToggle={setToggle} plantData={plantData} setPlantData={setPlantData} />
      <Search  input={input} setInput={setInput}/>
      <PlantList updatePrice={updatePrice} handleDelete={handleDelete} plantData={plantData} />
    </main>
  );
}

export default PlantPage;
