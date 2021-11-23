// Babel knows to import React for us when it finds JSX
//import React from "react";

/*
const Pet = (props) => {
  return React.createElement("div", { id: "pet-instance" }, [
    React.createElement("h2", { id: "pet-name" }, props.name),
    React.createElement("h3", { id: "pet-animal" }, props.animal),
    React.createElement("h3", { id: "pet-breed" }, props.breed),
  ]);
};
*/

// JSX equivalent to above commented code:
const Pet = (props) => {
  return (
    <div id="pet-instance">
      <h2 id="pet-name">{props.name}</h2>
      <h3 id="pet-animal">{props.animal}</h3>
      <h3 id="pet-breed">{props.breed}</h3>
    </div>
  );
};

export default Pet;
