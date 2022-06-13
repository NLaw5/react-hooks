import React, { useEffect, useState, useLayoutEffect, useMemo } from "react";
import axios from "axios";

function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  //   useLayoutEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/comments")
  //       .then((response) => {
  //         setData(response.data);
  //       });
  //   }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  //we need to use useMemo here because we only want this function fired when the actual data is changed
  //So when I press toggle button, I don't want this function to fire again as well
  const findLongestName = (comments) => {
    // console.log("in findLongestName: " + comments.data);
    if (!comments) return null;

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(
    () =>
      //first argument returns some sort of value
      findLongestName(data),
    //second argument is the depedency array, similiar to use effect, only recompute based on variable
    [data]
  );

  return (
    <div className="hookTutorial">
      <h1>useMemo Tutorial: </h1>
      <div>
        <p>{getLongestName}</p>
      </div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>Toggle is set to true</h1>}
    </div>
  );
}

export default MemoTutorial;
