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
//       qty: 0,
//     },
//     snack1: {
//       id: 0,
//       qty: 0,
//     },
//     snack2: {
//       id: 0,
//       qty: 0,
//     },
//     drink: {
//       id: 0,
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
    },
  },
});

export const { submitStudentForm } = cateringOrderSlice.actions;

export default cateringOrderSlice.reducer;
