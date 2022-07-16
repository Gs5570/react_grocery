
import React from 'react'



const GroceryList = (props) => {
  return (
    <div>
        <h2>Grocery Lists</h2>
       
        {
           props.groceryList.map((item,idx)=><h3 className='grocerylist'>{item}<br/> </h3> )
           
        }
    </div>
  )
}

export default GroceryList