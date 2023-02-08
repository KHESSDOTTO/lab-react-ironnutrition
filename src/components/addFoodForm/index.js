import { Divider, Input } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {
  const [ form, setForm ] = useState({name: "", image: "", calories: 0, servings: 0});
  function handleChange(event) {
   setForm({...form, [event.target.name]: event.target.value});
  };
  function handleSubmit(event) {
    event.preventDefault();
    props.addFood(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label htmlFor='name'>Name</label>
      <Input value={form.name} type="text" onChange={handleChange} name="name" id="name" />
      <label htmlFor='image'>Image</label>
      <Input value={form.image} type="text" onChange={handleChange} name="image" id="image" /> 
      <label htmlFor='calories'>Calories</label>
      <Input value={form.calories} type="number" onChange={handleChange} name="calories" id="calories" />
      <label htmlFor='servings'>Servings</label>
      <Input value={form.servings} type="number" onChange={handleChange} name="servings" id="servings" />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;

