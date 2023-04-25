import { useDispatch} from "react-redux"
import {putActiv} from '../Store'
import { useNavigate } from "react-router-dom"
function CardForm({change,setChange,setShowError}) {

  const Cards=JSON.parse(localStorage.getItem('Cards'));


    const Dispatch=useDispatch()
  const navigate=useNavigate()
  const handleInputChange=(e)=>{
    const{name,value}=e.target;
    setChange({...change,[name]:value})
    

  }
  const handleSpace=(e)=>{
    const{name}=e.target;
    const input = e.target.value;

    const formattedInput = input.replace(/(.{4})/g, "$1 ");
    setChange({...change,[name]:formattedInput})

    


  }
  const handleClick=(e)=>{
    e.preventDefault()
    if(Cards?.length === 3){
     setShowError(true)
    
    } else{
    Dispatch(putActiv(change))
    
    setChange({})

    navigate('/')
    }


  }

  return <div className="card-form">
    <form onSubmit={handleClick}>
<div>
<label htmlFor="cardNr">Credit Card Number:</label>
<input name="cardNr" type="text" pattern="[0-9]*" maxLength="16" placeholder="XXXX XXXX XXXX XXXX " onChange={handleSpace}  required></input>
</div>
<div>
<label htmlFor="name">Card Holder Name</label>
<input type="text" name="name" placeholder="Your name"  onChange={handleInputChange} required />
</div>

<div className="two">
 <div className="two-input"><label htmlFor="expiry" >Valid Thu</label>
<input type="month" name="expiry" placeholder="MM/YY"  onChange={handleInputChange}  required/>
</div>
<div>
 <label htmlFor="cvv">CVV </label>
<input type="number" name="cvv"  placeholder="XXX"  onChange={handleInputChange} maxLength={3} required/>

</div>

</div>


<div> 
  <label htmlFor="vendor"> Select a Vendor</label> 
  <select name="vendor" defaultValue=""  onChange={handleInputChange} required>
    <option value="" disabled>--Select a Vendor--</option>
  <option value="bitcoin">bitcoin</option>

  <option value="ninja">ninja</option>
  <option value="evil">evil</option>
  <option value="blockchain">blockchain</option>

  </select> 
  </div>




  

  <button >ADD Card</button>
  </form>
  </div>

}

export default CardForm