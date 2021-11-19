import React from "react";

const Pet = (props) => {
  return React.createElement("div", { id: "pet-instance" }, [
    React.createElement("h2", { id: "pet-name" }, props.name),
    React.createElement("h3", { id: "pet-animal" }, props.animal),
    React.createElement("h3", { id: "pet-breed" }, props.breed),
  ]);
};

export default Pet;
