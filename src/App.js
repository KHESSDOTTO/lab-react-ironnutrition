import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/foodBox";
import { Row, Divider, Button } from 'antd';
import AddFoodForm from "./components/addFoodForm";
import Search from "./components/search";

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
      <AddFoodForm addFood={addFood} />
      <Button> Hide Form / Add New Food </Button>

      <Search filterFood={filterFood} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.filter(cE => cE.name.toLowerCase().includes(textFilter.toLowerCase())).map(cE => <FoodBox delFunc={handleDelete} food={cE} />)}
      </Row>
    </div>
  );
}

export default App;
