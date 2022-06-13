import React, { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(
      "Use LayoutEffect shows original value of input box " +
        inputRef.current.value
    );
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="hookTutorial">
      <h1>useLayoutEffect Tutorial</h1>
      <input
        ref={inputRef}
        value="NEWMAN"
        style={{ width: 400, height: 200 }}
      ></input>
    </div>
  );
}

export default LayoutEffectTutorial;
