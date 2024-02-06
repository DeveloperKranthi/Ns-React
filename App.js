const grandParent = React.createElement(
  "div",
  { id: "grandParent" },
  "gpText",
  React.createElement("div", { id: "parent" }, "parent text", [
    [
      React.createElement("div", { id: "child1" }, "child text 1"),
      React.createElement("div", { id: "child2" }, "child2 text 2"),
    ],
    [
      React.createElement("div", { id: "child3" }, "child text 3"),
      React.createElement("div", { id: "child4" }, "child2 text 4"),
    ],
  ])
);

const h1 = React.createElement("h1", { id: "Header" }, "ReactJS heading");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(grandParent);
