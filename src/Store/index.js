import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer,addCard,removeCard,putActiv,switchCard} from "./Slices/CardSlice";
const store= configureStore({
  reducer:{
    cards:cardsReducer
  }
})
export{store,addCard,removeCard,putActiv,switchCard}