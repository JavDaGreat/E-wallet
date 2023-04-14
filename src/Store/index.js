import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer,addCard,removeCard,formChange,resetForm,putActiv} from "./Slices/CardSlice";
const store= configureStore({
  reducer:{
    cards:cardsReducer
  }
})
export{store,addCard,removeCard,formChange,resetForm,putActiv}