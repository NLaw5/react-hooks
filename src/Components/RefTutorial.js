import React, { useRef, useState } from "react";

function RefTutorial() {
  const [name, setName] = useState("Pedro");
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div className="hookTutorial">
      <h1>useRef Tutorial: {name}</h1>
      <input
        type="text"
        placeholder="Ex..."
        ref={inputRef}
        // onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
