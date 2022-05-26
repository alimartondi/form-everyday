import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  studentName: "",
  age: 0,
  school: "",
  class: "",
  alergy: "",
  parents: "",
  email: "",
  phone: "",
  selectedDates: [],
};

// const selectedDatesToMenusArray = [
//   {
//     date: "",
//     mainDish: {
//       id: 0,
//       name: "",
//       qty: 0,
//     },
//     snack1: {
//       id: 0,
//       name: "",
//       qty: 0,
//     },
//     snack2: {
//       id: 0,
//       name: "",
//       qty: 0,
//     },
//     drink: {
//       id: 0,
//       name: "",
//       qty: 0,
//     },
//   },
// ];

export const cateringOrderSlice = createSlice({
  name: "cateringOrder",
  initialState: initialValue,
  reducers: {
    submitStudentForm: (state, action) => {
      // apa yang akan dilakukan ketika submit form pertama
      state.studentName = action.payload.studentName;
      state.age = action.payload.age;
      state.school = action.payload.school;
      state.parents = action.payload.parents;
      state.class = action.payload.class;
      state.email = action.payload.email;
      state.alergy = action.payload.alergy;
      state.phone = action.payload.phone;
      state.selectedDates = action.payload.selectedDates;
    },
    submitMenuForm: (state, action) => {
      const idx = state.selectedDates.findIndex(
        (selectedDate) => selectedDate.id === action.payload.id
      );
      state.selectedDates[idx].mainDish = action.payload.mainDish;
      state.selectedDates[idx].snack1 = action.payload.snack1;
      state.selectedDates[idx].snack2 = action.payload.snack2;
      state.selectedDates[idx].drink = action.payload.drink;
    },
  },
});

export const { submitStudentForm, submitMenuForm } = cateringOrderSlice.actions;

export default cateringOrderSlice.reducer;
