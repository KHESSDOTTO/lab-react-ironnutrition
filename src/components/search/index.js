import { Divider, Input } from 'antd';
import { useState } from 'react';


function Search(props) {
  const [ searchContent, setSearchContent ] = useState("");
  function handleChange(event) {
    setSearchContent(event.target.value);
    props.filterFood(event.target.value);
  }
  return (
    <section>
      <Divider>Search</Divider>
      <label htmlFor="search">Search</label>
      <Input value={searchContent} name="search" id="search" type="text" onChange={handleChange} />
    </section>
  );
}

export default Search;
