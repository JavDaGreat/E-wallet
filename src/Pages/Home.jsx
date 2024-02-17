import Top from "../Components/Top";
import Card from "../Components/Card";
import CardStack from "../Components/CardStack";
import { useSelector } from "react-redux";

function Home() {
  const reduxCards = useSelector((state) => state.cards.data);
  const reduxActivcard = useSelector((state) => state.cards.activCard);

  return (
    <div className="Home">
      <Top header="E - Wallet" cardStatus="Activ Card" />
      <Card CardDetail={reduxActivcard} key={"cardHome"} />
      <CardStack storeCards={reduxCards} />
    </div>
  );
}

export default Home;
