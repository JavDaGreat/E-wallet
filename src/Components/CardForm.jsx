
function CardForm() {

  return <div className="card-form">
<div>
<label htmlFor="ccn">Credit Card Number:</label>
<input name="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" 
 maxLength="19" placeholder="xxxx xxxx xxxx xxxx"></input>
</div>
<div>
<label htmlFor="name">Card Holder Name</label>
<input type="text" name="name" placeholder="Your name" />
</div>

<div className="two">
 <div className="two-input"><label htmlFor="valid">Valid Thu</label>
<input type="number" name="valid" placeholder="MM/YY" />
</div>
<div>
 <label htmlFor="CVV">CVV </label>
<input type="number" name="CVV"  placeholder="XXX" />

</div>

</div>


<div> 
  <label htmlFor="vendor"> Select a Vendor</label> 
  <select name="vendor" >
  <option value="bitcoin">bitcoin</option>

  <option value="ninja">ninja</option>
  <option value="evil">evil</option>
  <option value="ninja">ninja</option>

  </select> 
  </div>




  

  <button>ADD Card</button>
  </div>

}

export default CardForm