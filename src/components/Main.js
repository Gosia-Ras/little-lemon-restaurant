import React, { useReducer } from "react";

const initializeState = () => ({
  availableTimes: [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ],
  closureMessage: "",
});

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES_BASED_ON_DATE":
      const date = new Date(action.date);
      const dayOfWeek = date.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6

      if (dayOfWeek === 1) {
        // Monday
        return {
          availableTimes: [], // No available times
          closureMessage: "We're closed on Mondays", // Closure message
        };
      } else if (dayOfWeek === 0 || dayOfWeek === 6) {
        // Weekend
        return {
          availableTimes: [
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
            "17:30",
            "18:00",
            "18:30",
            "19:00",
            "19:30",
            "20:00",
            "20:30",
            "21:00",
          ],
          closureMessage: "", // Reset message
        };
      }
      // For other days, return initial/default times with no closure message
      return initializeState();
    default:
      return state;
  }
};

function Main({ children }) {
  const [state, dispatch] = useReducer(updateTimes, undefined, initializeState);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { state, dispatch })
  );

  return <main>{childrenWithProps}</main>;
}

export default Main;
