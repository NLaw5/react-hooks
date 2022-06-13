import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

function CallbackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Random text");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="hookTutorial">
      <h1>useCallback Tutorial:</h1>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
}

export default CallbackTutorial;
