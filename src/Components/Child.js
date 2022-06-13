import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return (
    <div>
      <p>{returnComment(" Newman")}</p>
    </div>
  );
}

export default Child;
