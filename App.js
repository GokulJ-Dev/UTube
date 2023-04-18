import React from "react";
import ReactDOM from "react-dom/client";

const welcome = React.createElement("h2", { id: "welcomeText" }, "Welcome Gokul ~ Developer");

const WelcomeJsx = () => <h3 id="welcomeJSX" className="Head" tabIndex={5}>Welcome Developer from JSX ~ React component</h3>;

//React Component -> return jsx element

const WelcomeText = () => (
    <div>
        <WelcomeJsx />
        {/* component composition */}
        <h3 id="welcomeReactComp" >Welcome Developer from React Component</h3>
    </div>
);


const parent = React.createElement("div", { id: "Parent" },
    React.createElement("div", { id: "Child" }, [
        React.createElement("h1", { id: "h1Tag" }, "Hello Gokul From React"), React.createElement("h4", { id: "h4Tag" }, "Rock it mannn! Ignition")
    ]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WelcomeText />);



