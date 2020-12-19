import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Rex",
      animal: "Dog",
      breed: "Midleasian shephard",
    }),
    React.createElement(Pet, {
      name: "Jack",
      animal: "Parrot",
      breed: "Ara",
    }),
    React.createElement(Pet, {
      name: "Lexi",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
