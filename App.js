import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "Parent" },
    React.createElement("div", { id: "Child" }, [
        React.createElement("h1", { id: "h1Tag" }, "Hello Gokul From React"), React.createElement("h4", { id: "h4Tag" }, "Rock it mannn!")
    ]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


