import Top from '../Components/Top'
import Card from '../Components/Card'
import CardForm from '../Components/CardForm'
function AddCard(){
  return <div className='AddCard'> 
    <Top header='Add a new bankcard' cardStatus='New Card'/>
  <Card />
  <CardForm />


  </div>
}

export default AddCard