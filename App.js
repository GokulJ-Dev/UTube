const heading = React.createElement("h2", { id: "Dev" }, "Hello Gokul Developer!!");

const nested = React.createElement("div", { id: "Parent" },
    [React.createElement("div", { id: "Child1" },
        [React.createElement("h1", {}, "Hello Nested Trail"), React.createElement("h4", {}, "Hello Nested Trail")]),
    React.createElement("div", { id: "Child2" },
        [React.createElement("h1", {}, "Hello Nested Trail2"), React.createElement("h4", {}, "Hello Nested Trail2")])]);

console.log(nested);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(nested);