//Redux logic lives here

// const redux = require("redux");
import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./counter";
import authReducer from "./auth";

// export const INCREMENT = "increment";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

//creates redux store
const store = configureStore({
  reducer: { counter: couterReducer, auth: authReducer },
});

// const counterSubscriber = () => {
//   const latestState = store.getState();
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });

export default store;
