import React, { useRef } from "react";
import Button from "./Button";

function ImperativeHandle() {
  //This is now a refernce to our component
  const buttonRef = useRef(null);

  //TAKE NOTE! Our current.alterToggle() is a function from our child component
  //We use this
  return (
    <div className="hookTutorial">
      <h1>useImperativeHook Tutorial</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
