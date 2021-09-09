import React ,{useState}from "react";

function PlantCard(props) {
  const {image, updatePrice, name, id, price, handleDelete} = props;
  const [carted, setCarted] = useState(true)
  const [newPrice, setNewPrice] = useState(price)

function toggleSwitch () {
    setCarted(carted => !carted)
}

function handleSubmit(event) {
  event.preventDefault()
  updatePrice(id,newPrice)
}

function updatingNewPrice(event) {
setNewPrice(event.target.value)

}
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <form onSubmit={handleSubmit}>
        <p>Price:  {price}</p>
        <input type="number" onChange={updatingNewPrice} value={newPrice} name="price" step="0.01"/>
        <button type="submit"> Update Price </button>
      </form>
      {carted ? (
        <button onClick={toggleSwitch} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleSwitch}> <li> Out of Stock </li> </button>
      )}
      <button onClick={() => handleDelete(id)}> Delete From Inventory </button>
    </li>
  );
}

export default PlantCard;
