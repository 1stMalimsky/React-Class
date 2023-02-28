import { Fragment } from "react";

const FirstComponent = () => {
  const someText = "This is a random text";
  return (
    // Fragment allows you to add more than one tag in a React function without costing you the lagging of a div element
    <Fragment>
      <h1>Hello component world</h1>
      <h2 style={{ color: "red" }}>{someText}</h2>
    </Fragment>
  );
};

export default FirstComponent;
