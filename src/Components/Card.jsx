import chip from '../assets/chip-dark.svg'
import evil from'../assets/vendor-evil.svg'
import bitcoin from'../assets/vendor-bitcoin.svg'
import ninja from'../assets/vendor-ninja.svg'
import blockchain from'../assets/vendor-blockchain.svg'

function Card() {

  return <div className="card">
   <div className="card-svg"> <img src={chip} alt="chip" /> <img src={bitcoin} alt="vendor" /></div>
   <div className="cardNumber">&nbsp;XXXX &nbsp;&nbsp;XXXX &nbsp;&nbsp;XXXX&nbsp;</div>
   <div className="cardDetail"> <span>CardHolder:Ayri</span><span> Valid:27/1</span></div>




  </div>
}

export default Card