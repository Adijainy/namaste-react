// import React from "react";
// import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {id:"title1"}, "namaste yay");
const heading2 = React.createElement("h1", {id:"itite2"}, "react");
const div = React.createElement(
    "div", {}, [heading, heading2] 
    )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);