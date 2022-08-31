// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react'

// Iteration 4
function AddFoodForm({addFood}) {
  const [formName, setFormName] = useState("");
  const [formCalories, setFormCalories] = useState(0);
  const [formImage, setFormImage] = useState("");
  const [formServings, setFormServings] = useState(0);

  const handleFormNameInput = e => setFormName(e.target.value);
  const handleFormImageInput = e => setFormImage(e.target.value);
  const handleFormCaloriesInput = e => setFormCalories(e.target.value);
  const handleFormServingsInput = e => setFormServings(e.target.value);

  const handleSubmit = e => {
    e.preventDefault()
    const newFood = {name: formName, image: formImage, calories: formCalories, servings: formServings}
    console.log(newFood)
    addFood(newFood)

    // Reset the state
    setFormName("");
    setFormImage("");
    setFormCalories(0);
    setFormServings(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label><br></br>
      <Input style={{ width: '40%', marginBottom: '20px'}} value={formName} type="text" onChange={handleFormNameInput} /><br></br>
      
      <label>Image</label><br></br>
      <Input style={{ width: '40%', marginBottom: '20px'}} value={formImage} type="text" onChange={handleFormImageInput} /><br></br>
      
      <label>Calories</label><br></br>
      <Input style={{ width: '40%', marginBottom: '20px'}} value={formCalories} type="number" onChange={handleFormCaloriesInput} /><br></br>
      
      <label>Servings</label><br></br>
      <Input style={{ width: '40%', marginBottom: '20px'}} value={formServings} type="number" onChange={handleFormServingsInput} /><br></br>
      
      <button style={{marginBottom: '20px'}} type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;