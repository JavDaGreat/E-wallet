import Top from "../Components/Top"
import Card from "../Components/Card"
import CardStack from '../Components/CardStack'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
function Home() {


  
  const getCards = JSON.parse(localStorage.getItem('Cards'));
  const getAktivCard = JSON.parse(localStorage.getItem('AktivCard'));
  const reduxCards=useSelector((state)=>{
  return state.cards.data
    
  })
  const reduxActivcard=useSelector((state)=>{
    return state.cards.activCard
  })


  const navigate= useNavigate()
  let storeCards;
  let activCard;
  

   if(getCards?.length !== 0){
    storeCards=getCards
   }else{
    storeCards=reduxCards

   }

   if(getAktivCard &&(Object.keys(getAktivCard).length === 0)){
    activCard=reduxActivcard
   }else{
    activCard=getAktivCard
   }
 
 



const handleclick=()=>{
  navigate('/addcard')
}
  return <div className="Home">
    <Top header= 'E - Wallet' cardStatus='Activ Card'/>
    <Card CardDetail={activCard} key={'cardHome'} />
    <CardStack storeCards={storeCards} />
  <button onClick={handleclick}>Addcard</button>
  </div>
}

export default Home