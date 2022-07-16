import Header from './components/header/Header';
import './App.css';
import Form from './components/Form/Form';
import GroceryList from './components/GroceryList/GroceryList';
import {useState} from 'react'

function App() {

  const [groceryList, setgroceryList]= useState([])

  return (
    <div className="App">
    <Header txt="Grocery List App"/>
    <Form setgroceryList={setgroceryList} />
    {groceryList && <GroceryList groceryList={groceryList}/>}

    </div>
  );
}

export default App;
