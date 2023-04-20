import { createSlice } from "@reduxjs/toolkit";
const cardSlice=createSlice({
  name:'cards',
  initialState:{

    data:[],
    activCard:[]
  },
  reducers:{

   
    removeCard(state,action){
      const updated=state.data.filter((card)=>{
        return card.cardNr !== action.payload.cardNr
      })
      state.data=updated;
      let myArray = JSON.parse(localStorage.getItem("Cards"));
      let index = myArray.filter(obj => obj.cardNr ===action.payload.cardNr );
      myArray.splice(index, 1);
      localStorage.setItem("Cards", JSON.stringify(myArray));




    },
    putActiv(state,action){
      if(state.activCard.length === 0){
      state.activCard=action.payload
      localStorage.setItem('AktivCard', JSON.stringify(state.activCard));

      

    }else {
      state.data.push(state.activCard)
      localStorage.setItem('Cards', JSON.stringify(state.data));

      state.activCard=action.payload
      localStorage.setItem('AktivCard', JSON.stringify(state.activCard));


    }
   

    },
    switchCard(state,action){
      state.data.push(state.activCard)
      localStorage.setItem('Cards', JSON.stringify(state.data));



      state.activCard=action.payload
      localStorage.setItem('AktivCard', JSON.stringify(state.activCard));

      const updated=state.data.filter((card)=>{
        return card.cardNr !== action.payload.cardNr
      })
      state.data=updated;
      localStorage.setItem('Cards', JSON.stringify(state.data));


    
     
    }

  }
})

export const {removeCard,addCard,putActiv,switchCard}=cardSlice.actions
export const cardsReducer= cardSlice.reducer