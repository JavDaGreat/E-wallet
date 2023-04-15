import Card from "./Card"
function CardStack({storeCards}) {
const content=storeCards.map((storeCard)=>{
  console.log(storeCard);
  return <Card  CardDetail={storeCard} key={storeCard.cardNr} cardStack={true} />
})
  return <div className="cardStack">{content}</div>
}

export default CardStack