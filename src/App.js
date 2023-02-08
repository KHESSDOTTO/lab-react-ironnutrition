import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/foodBox";
import { Row, Divider, Button } from 'antd';
import AddFoodForm from "./components/addFoodForm";

function App() {
  const [ foodList, setFoodList ] = useState(foods)
  function addFood(newFood) {
    setFoodList([...foodList, newFood]);
  };
  return (
    <div>
      <AddFoodForm addFunction={addFood} />
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map(cE => <FoodBox food={cE} />)}
      </Row>
    </div>
  );
}

export default App;
