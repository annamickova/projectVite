import React from "react";
const testComponent = () => {
  const handleClick = () => {
    alert("Button clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default testComponent;
