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

const Logo = ()=>{
    return (
        <a href="#">React</a>
    );
};

const SearchBar = ()=>{
    return(
        <>
            <input key="2.1" type="text" placeholder="Search.."></input>
            <button key="2.btn" className="btn" type="submit"><i className="fa fa-search"></i></button>
        </>
    );
};

const UserIcon =()=>{
    return(
        // <div>
            <i className="fa-solid fa-user"></i>
        // {/* </div> */}
            
    );
};

//navbar component
const Navbar = ()=>{
    return (
        <div id="last" class="bar">
            <ul id="nav-items">
                <li key="logo" className="logo">
                    <Logo />
                </li>
                <li key = "search" className="search">
                    <SearchBar/>
                </li>
                <li key="user">
                    <UserIcon/>
                </li>
            </ul> 
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar/>);