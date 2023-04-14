import Top from "../Components/Top"
import Card from "../Components/Card"
import CardStack from '../Components/CardStack'
import { useNavigate } from "react-router-dom"
function Home() {
const navigate= useNavigate()

const handleclick=()=>{
  navigate('/addcard')
}
  return <div>
    <Top header= 'E - Wallet' cardStatus='Activ Card'/>
    <Card/>
    <CardStack />
  <button onClick={handleclick}>Addcard</button>
  </div>
}

export default Home