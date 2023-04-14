import chip from '../assets/chip-dark.svg'
import evil from'../assets/vendor-evil.svg'
import bitcoin from'../assets/vendor-bitcoin.svg'
import ninja from'../assets/vendor-ninja.svg'
import blockchain from'../assets/vendor-blockchain.svg'


function Card(change) {
  const vendorsLogo=[bitcoin,evil,ninja,blockchain]
 
    console.log(change);

  return <div className="card">
   <div className="card-svg"> <img src={chip} alt="chip" /> <img src={bitcoin} alt="vendor" /></div>

   <div className="cardNumber">&nbsp;XXXX &nbsp;&nbsp;XXXX &nbsp;&nbsp;XXXX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;XXXX</div>
   <div className="cardDetail"> <div><p>CARDHOLDER NAME</p> <p>AYRi</p></div> <div> <p>VALID THRU</p> <p>27/1</p></div></div>




  </div>
}

export default Card