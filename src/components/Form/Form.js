import React, { useState } from 'react'


const Form = (props) => {
    /**change the state of the input */
    const [uInput, setUInput] = useState('');
    console.log(uInput)



    const handleSubmit=(event)=>{
        event.preventDefault()

        // const oldArray=[];

        // props.setgroceryList(oldArray=>[...oldArray,uInput])
        console.log(props.setgroceryList(oldArray=>[...oldArray,uInput]));

      // props.setgroceryList(prevstate=>[prevstate, uInput])
        
    }

  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='groceryItem'>Grocery Item </label>
            <input 
            type="text" 
            id ="textForm"
            value={uInput}
            onChange={(event)=>{setUInput(event.target.value)}}
            />

            <input 
            type="submit" value="Add" />
            {/* <p>{uInput}</p> */}
        </form>
    </div>
  )
}

export default Form