import Top from '../Components/Top'
import Card from '../Components/Card'
import CardForm from '../Components/CardForm'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import back from '../assets/back.svg'
function AddCard(){
  const Navigate=useNavigate()
 const [change,setChange]=useState({})
 const[showError,setShowError]=useState(false)
 const error= <div className="error"> <img src={back} onClick={()=>{Navigate('/')}}/><h3 style={{display:'inline'}}>You have already 4 Cards, please go back and remove one </h3></div>


 
  return <div className='AddCard'> 
    <Top header='ADD A NEW BANK CARD' cardStatus='New Card' goBack={true}/>
    {showError && error}

  <Card  CardDetail={change} key={'addCard'}/>
  <CardForm change={change} setChange={setChange} showError={showError}setShowError={setShowError}/>


  </div>
}

export default AddCard