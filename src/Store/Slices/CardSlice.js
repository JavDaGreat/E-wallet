import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    data: [],
    activCard: [],
  },
  reducers: {
    removeCard(state, action) {
      const updated = state.data.filter((card) => {
        return card.cardNr !== action.payload.cardNr;
      });
      state.data = updated;
    },
    putActiv(state, action) {
      if (state.activCard.length === 0) {
        state.activCard = action.payload;
      } else {
        state.data.push(state.activCard);
        state.activCard = action.payload;
      }
    },
    switchCard(state, action) {
      state.data.push(state.activCard);
      state.activCard = action.payload;

      const updated = state.data.filter((card) => {
        return card.cardNr !== action.payload.cardNr;
      });
      state.data = updated;
    },
  },
});

export const { removeCard, putActiv, switchCard } = cardSlice.actions;
export const cardsReducer = cardSlice.reducer;
