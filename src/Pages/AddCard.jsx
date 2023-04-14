import Top from '../Components/Top'
import Card from '../Components/Card'
import CardForm from '../Components/CardForm'
import { useState } from 'react'
function AddCard(){
 const [change,setChange]=useState({})
 
  return <div className='AddCard'> 
    <Top header='ADD A NEW BANK CARD' cardStatus='New Card'/>
  <Card  change={change}/>
  <CardForm change={change} setChange={setChange} />


  </div>
}

export default AddCard