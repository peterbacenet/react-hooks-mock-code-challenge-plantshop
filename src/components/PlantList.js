import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, handleDelete, updatePrice}) {

const singlePlant = plantData.map((plant) => {
  return <PlantCard 
  updatePrice={updatePrice} 
  handleDelete={handleDelete} 
  id={plant.id} 
  key={plant.id}
  image={plant.image} 
  name={plant.name} 
  price={plant.price}/>
})
  return (
    <ul className="cards">{singlePlant}</ul>
  );
}

export default PlantList;
