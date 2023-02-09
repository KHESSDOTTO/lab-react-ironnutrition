import { Button } from "antd";
import { Link } from "react-router-dom";


export function HideButton() {
  return <Link to="/"><Button>Hide form</Button></Link>
};

export function ShowButton() {
  return <Link to="/addFoodForm"><Button>Add New Food</Button></Link>
};
