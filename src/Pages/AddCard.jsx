import Top from '../Components/Top'
import Card from '../Components/Card'
import CardForm from '../Components/CardForm'
import { useState } from 'react'
function AddCard(){
 const [change,setChange]=useState({})
 const [data, setData] = useState([]);

 
  return <div className='AddCard'> 
    <Top header='ADD A NEW BANK CARD' cardStatus='New Card'/>
  <Card  CardDetail={change} key={'addCard'}/>
  <CardForm change={change} setChange={setChange} />


  </div>
}

export default AddCard