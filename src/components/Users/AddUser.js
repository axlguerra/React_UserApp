import React, {useState} from 'react'
import Card from '../UI/Card'
import classes from "./AddUser.module.css"
import Button from '../UI/Button'
import ErrosModal from '../UI/ErrosModal'

function AddUser(props) {

  const [enteredUsername, setEnteredUsername ] = useState();
  const [enteredAge, setEnteredAge ] = useState();
  const [error, setError]= useState();


  const addUserHandler = (event) =>{
    event.preventDefault()

    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
      setError({
        title: "Invalid Input",
        message:"Please enter a valid name and age"
      })
      return
    }

    if(+enteredAge<1){

      setError({
        title: "Invalid Input",
        message:"Please enter a valid age greater than 0"
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    console.log(enteredAge, enteredUsername)
    setEnteredAge("")
    setEnteredUsername("")


    




  }

  const userNameChangeHandler = (event) =>{

    setEnteredUsername(event.target.value)

  }


  const ageChangeHandler = (event) =>{

    setEnteredAge(event.target.value)

  }

  const errorHandler =()=>{
    setError(null);
  }

  return (


    <div>

    

    {error && <ErrosModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrosModal>}

      <Card className={classes.input}>

      

        <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input value={enteredUsername} id='username' onChange={userNameChangeHandler} type="text"></input>
        <label htmlFor='age' >Age (Years)</label>
        <input value={enteredAge} id="age" onChange={ageChangeHandler}></input>
        <Button type='submit'>Add user</Button>        
     </form>





      </Card>


      </div>





      
  )
}

export default AddUser
