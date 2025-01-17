// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Row, Divider, Button } from 'antd';
import './App.css';
import allFoods from './foods.json'
import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(allFoods)
  const [showForm, setShowForm] = useState(false)
  // const generatedId = uuid()
  // console.log(foods)

  const addNewFood = newFood => {
    const updatedFoods = [...foods, newFood]
    setFoods(updatedFoods)
  }

  const removeFood = foodName => {
    const updatedFoods = foods.filter((elem)=>{
      return elem.name !== foodName
    })
    setFoods(updatedFoods)
  }

  return (
    <div className="App">
      <Search foods={foods} setFoods={setFoods}/>
      <Button onClick={() => setShowForm(!showForm)}> {showForm ? "Hide Form" : "Add New Food"} </Button>
      {showForm && <AddFoodForm addFood={addNewFood}/>}
      <Divider>Food List</Divider>
      { foods.map( food => {
        return (
          <Row key={uuid()} style={{ width: '100%', justifyContent: 'center' }}>
            <FoodBox name={food.name} calories={food.calories} image={food.image} servings={food.servings} removeFood={removeFood}/>
          </Row>
        )
      }) }
    </div>
  );
}

export default App;
