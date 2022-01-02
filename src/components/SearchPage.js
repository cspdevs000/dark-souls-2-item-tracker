import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ItemList from './ItemList';
import axios from 'axios';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [itemListDefault, setItemListDefault] = useState();
  const [itemList, setItemList] = useState();

  const fetchData = () => {
    axios.get('http://localhost:3000/weapons')
    .then((response) => {
        console.log(response.data);
    })
    .then(data => {
      setItemList(data) 
      setItemListDefault(data)
    })
    .catch((error) => { 
        console.log('error ERROR error', error)
    })
}

  const updateInput = async (input) => {
     const filtered = itemListDefault.filter(item => {
      return item.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setItemList(filtered);
  }

  useEffect( () => {fetchData()},[]);
  // console.log("here is the data", fetchData().weaponArray)
	
  return (
    <>
      <SearchBar 
       input={input} 
       onChange={updateInput}
       onSubmit={console.log('here is your input...', input)}
       />
       <h1>Results</h1>
      <ItemList itemList={itemList}/>
    </>
   );
}

export default SearchPage