import Top from "../Components/Top"
import Card from "../Components/Card"
import CardStack from '../Components/CardStack'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
function Home() {
const navigate= useNavigate()
const storeCards=useSelector((state)=>{
  return state.cards.data
})

const handleclick=()=>{
  navigate('/addcard')
}
  return <div>
    <Top header= 'E - Wallet' cardStatus='Activ Card'/>
    <Card/>
    <CardStack storeCards={storeCards} />
  <button onClick={handleclick}>Addcard</button>
  </div>
}

export default Home