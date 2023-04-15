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

      })
    },
    removeCard(state,action){
      const updated=state.data.filter((card)=>{
        return card.cardNr !== action.payload.cardNr
      })
      state.data=updated;
    },
    putActiv(state,action){
      if(state.activCard.length === 0){
      state.activCard=action.payload
      

    }else {
      state.data.push(state.activCard)
      state.activCard=action.payload

    }
   

    },
    switchCard(state,action){
      state.data.push(state.activCard)

      state.activCard=action.payload
      const updated=state.data.filter((card)=>{
        return card.cardNr !== action.payload.cardNr
      })
      state.data=updated;
    
     
    }

  }
})

export const {removeCard,addCard,putActiv,switchCard}=cardSlice.actions
export const cardsReducer= cardSlice.reducer