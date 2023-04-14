import Card from "./Card"
function CardStack({storeCards}) {
const content=storeCards.map((storeCard)=>{
  console.log(storeCard);
  return <Card storeCard={storeCard} key={storeCard.cardNr}/>
})
  return <div>{content}</div>
}

export default CardStack