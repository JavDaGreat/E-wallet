import { useState } from "react"
import { useDispatch} from "react-redux"
import {addCard} from '../Store'
import { useNavigate } from "react-router-dom"
function CardForm({change,setChange}) {
  const Dispatch=useDispatch()
  const navigate=useNavigate()
  const handleInputChange=(e)=>{
    const{name,value}=e.target;
    setChange({...change,[name]:value})
    

  }
  const handleClick=()=>{
    Dispatch(addCard(change))
    
    navigate('/')


  }
  return <div className="card-form">
<div>
<label htmlFor="cardNr">Credit Card Number:</label>
<input name="cardNr" type="tel"  maxLength="19" placeholder="xxxx xxxx xxxx xxxx" onChange={handleInputChange}></input>
</div>
<div>
<label htmlFor="name">Card Holder Name</label>
<input type="text" name="name" placeholder="Your name"  onChange={handleInputChange} />
</div>

<div className="two">
 <div className="two-input"><label htmlFor="expiry" >Valid Thu</label>
<input type="number" name="expiry" placeholder="MM/YY"  onChange={handleInputChange} />
</div>
<div>
 <label htmlFor="cvv">CVV </label>
<input type="number" name="cvv"  placeholder="XXX"  onChange={handleInputChange} />

</div>

</div>


<div> 
  <label htmlFor="vendor"> Select a Vendor</label> 
  <select name="vendor" defaultValue=""  onChange={handleInputChange}>
    <option value="" disabled>--Select a Vendor--</option>
  <option value="bitcoin">bitcoin</option>

  <option value="ninja">ninja</option>
  <option value="evil">evil</option>
  <option value="ninja">ninja</option>

  </select> 
  </div>




  

  <button onClick={handleClick}>ADD Card</button>
  </div>

}

export default CardForm