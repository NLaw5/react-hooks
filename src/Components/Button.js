import React, { forwardRef, useImperativeHandle, useState } from "react";

//We use ForwardRef to grab REFERENCES from useRef() variables from parent components
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    //We create functions here that our parent can use in the childComponent
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Button From Child
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
