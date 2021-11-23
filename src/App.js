//import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// NOTE: that App has to be capitalized otherwise React will assume it is a html element
// and not render properly

// The ... in ...[1,2,3,4] is the spread operator
// the map function call a callback function on each element of an array
/*
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
*/

// NOTE: by default eslint does not know how to handle JSX
// It thinks that we never use the Pet element we imported even though we do
// we need to "npm install -D eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1
// eslint-plugin-react@7.22.0" the last one is the one that tells eslint how
// to deal with JSX
const App = () => {
  const mapExample = [1, 2, 3, 4].map((i) => <h2 key={i}>{i}</h2>);

  return (
    <div id="pet-display">
      <h1 id="my-brand">Adopt me!</h1>
      {mapExample}
      <Pet name="Bertrand" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Mr.Seeds" animal="Bird" breed="Lesser Paradise"></Pet>
      <Pet name="Smeagol" animal="Cat" breed="Tabby"></Pet>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
