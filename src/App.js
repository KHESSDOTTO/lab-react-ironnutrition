import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/foodBox";
import { Row, Divider, Button } from 'antd';
import AddFoodForm from "./components/addFoodForm";
import Search from "./components/search";
import {Routes, Route} from "react-router-dom";
import { ShowButton } from "./components/hideSeekFormButtons/hideShowButton";


function App() {
  const [ foodList, setFoodList ] = useState(foods)
  function addFood(newFood) {
    setFoodList([...foodList, newFood]);
  };
  const [ textFilter, setTextFilter ] = useState("");
  function filterFood(text) {
    setTextFilter(text);
  };
  function handleDelete(deleteFoodName) {
    setFoodList(foodList.filter(cE => cE.name !== deleteFoodName));
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowButton />}/>
        <Route path="/addFoodForm" element={<AddFoodForm addFood={addFood} />} />
      </Routes>

      <Search filterFood={filterFood} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.filter(cE => cE.name.toLowerCase().includes(textFilter.toLowerCase())).map(cE => <FoodBox delFunc={handleDelete} food={cE} />)}
      </Row>
    </div>
  );
}

export default App;
