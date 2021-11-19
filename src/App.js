import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// NOTE: that App has to be capitalized otherwise React will assume it is a html element
// and not render properly

// The ... in ...[1,2,3,4] is the spread operator
// the map function call a callback function on each element of an array
const App = () => {
  return React.createElement("div", { id: "pets-display" }, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    ...[1, 2, 3, 4].map((i) =>
      React.createElement("h2", { id: "spread-test" }, i)
    ),
    React.createElement(Pet, {
      name: "Bertrand",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "SpudBucket",
      animal: "Bird",
      breed: "Parrot",
    }),
    React.createElement(Pet, { name: "Kurt", animal: "Cat", breed: "Tabby" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
