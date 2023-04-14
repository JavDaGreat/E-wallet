import { createSlice,nanoid } from "@reduxjs/toolkit";
const cardSlice=createSlice({
  name:'cards',
  initialState:{

    data:[],
    activCard:[]
  },
  reducers:{

    addCard(state,action){
      state.data.push({
        name:action.payload.name,
        cardNr:action.payload.cardNr,
        expiry:action.payload.expiry,
        cvv:action.payload.cvv,
        vendor:action.payload.vendor,
        id:nanoid()

      })
    },
    removeCard(state,action){
      const updated=state.data.filter((card)=>{
        return card.id !==action.payload
      })
      state.data=updated
    },
    putActiv(state,action){
      state.activCard=action.payload

    }
  }
})

export const {removeCard,addCard,putActiv}=cardSlice.actions
export const cardsReducer= cardSlice.reducer