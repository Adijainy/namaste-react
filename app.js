import React from "react";
import ReactDOM from "react-dom/client";
const title1 =(
    <h3>
         react element inside function 
    </h3>
);
const Title2 = ()=> (
    <h3> 
        function inside function with tag 
    </h3>
);
const Title3 = ()=> (
    <h3> 
        function inside function, call the function
    </h3>
);
//react functional componenet
const Header = ()=> (
    <div>
        <h1> React functional  </h1>
        <h2>component </h2>
        {title1}
        <Title2 />
        {Title3()}
    </div>  
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);