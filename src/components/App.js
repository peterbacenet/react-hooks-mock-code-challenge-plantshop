import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // make sure data use state has array to place data in
const [plantData, setPlantData] = useState([])
const [input, setInput] = useState("")
const [toggle, setToggle] = useState(false)

function fetching() {
  fetch('http://localhost:6001/plants')
  .then((r) => r.json())
  .then(data => {
  console.log("Data fetched..")
  setPlantData(data)
});
}

useEffect(() => {
  console.log("Re-Running...")
  fetching();
},[toggle]);

function handlePost(newPlant) {
  fetch('http://localhost:6001/plants', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then(resp => resp.json())
    .then(
      console.log("Added this fuckin plant"),
      setToggle(!toggle)
    )
}

// I can update the price of a plant and still see the updated price after refreshing the page.
// I can delete a plant and it is still gone when I refresh the page.

function handleDelete(id) {
  // delete backend
  fetch(`http://localhost:6001/plants/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
  }})
  .then(
  setToggle(!toggle)
  )
}

function updatePrice(id, newPrice) {
  fetch(`http://localhost:6001/plants/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          price:newPrice
      })
      }).then(
        console.log("Updated Price"),
        setToggle(!toggle)
      )
    };

const results = ( plantData.filter ((plant) => input === "" || plant.name.toLowerCase().includes(input.toLowerCase()) ))

  return (
    <div className="app">
      <Header  />
      <PlantPage
        toggle={toggle}
        setToggle={setToggle}
        handleDelete={handleDelete} 
        handlePost={handlePost}
        input={input} 
        updatePrice={updatePrice}
        setInput={setInput} 
        plantData={results} 
        setPlantData={setPlantData} />
    </div>
  );
}

export default App;
