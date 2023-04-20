import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer,removeCard,putActiv,switchCard} from "./Slices/CardSlice";
const store= configureStore({
  reducer:{
    cards:cardsReducer
  }
})
export{store,removeCard,putActiv,switchCard}