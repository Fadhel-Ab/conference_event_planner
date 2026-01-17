// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
 initialState: [
  { name: 'Breakfast', type: 'mealForPeople', cost: 50, selected: false, numberOfPeople: 0 },
  { name: 'High Tea', type: 'snack',         cost: 25, selected: false, numberOfPeople: 0 },
  { name: 'Lunch',     type: 'mealForPeople', cost: 65, selected: false, numberOfPeople: 0 },
  { name: 'Dinner',    type: 'mealForPeople', cost: 70, selected: false, numberOfPeople: 0 },
],
  reducers: {
    toggleMealSelection: (state, action) => {
      const {index, numberOfPeople=0}=action.payload;
      const item=state[index];
      item.selected=!item.selected;

      if(item.type === "mealForPeople") {
        item.numberOfPeople = item.selected ? numberOfPeople : 0;
      }
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
