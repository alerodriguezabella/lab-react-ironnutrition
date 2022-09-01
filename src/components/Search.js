// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import {useState} from 'react'

// Iteration 5
function Search({foods, setFoods}) {
  const [search, setSearch] = useState("")

  const updateFoods = (searchInput) => {
    setSearch(searchInput)
    const foodsCopy = [...foods]
    const inputSearch = searchInput.toLowerCase()
    const filteredFood = foodsCopy.filter(food => food.name.toLowerCase().includes(inputSearch))
    setFoods(filteredFood)
  }

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label><br></br>
      <Input style={{ width: '40%', marginBottom: '20px'}} value={search} type="text" onChange={(event) => {updateFoods(event.target.value)}} /><br></br>
    </>
  );
}

export default Search;
