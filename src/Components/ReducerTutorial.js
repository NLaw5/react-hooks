import React, { useReducer, useState } from "react";

function ReducerTutorial() {
  // // We will use useReducer for our button, here below is how it's done with useState
  // const [count, setCount] = useState(0)
  // const [showText, setShowText] = useState(true)
  // //Notice how in this code, we have a button that calls two use States, with useReducer we can shorten this to only oneState

  //   return (
  //     <div className="reducerTutorial">
  //         <h1>{count}</h1>
  //         <button onClick={() => {
  //             setCount(count + 1)
  //             setShowText(!showText)
  //         }}>Click Me!</button>
  //         {
  //             showText && <p>This is a text!</p>
  //         }
  //     </div>
  //   )

  //Create reducer function:
  // State: Constant access of the current state that we have in our reducer (values of the states were managing)
  // Action: What type of action we're tryign to take and end with in each of our state
  const reducerFunction = (state, action) => {
    //boilerplate code:
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "SHOWTEXT":
        return { count: state.count, showText: !state.showText };
      default:
        return { count: state.count, showText: state.showText };
    }
  };

  //Reducer method:
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    showText: true,
  });

  return (
    <div className="hookTutorial">
      <h1>useReducer Tutorial: {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "SHOWTEXT" });
        }}
      >
        Click Me!
      </button>
      {state.showText && <p>This is a text!</p>}
    </div>
  );
}

export default ReducerTutorial;
