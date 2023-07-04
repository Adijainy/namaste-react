export const Title = ()=>{
    return (
        <a href="/">
            <img className="logo" src="https://s3.amazonaws.com/thumbnails.venngage.com/template/9f596769-790d-4b5f-bb80-668016a9c920.png" alt="logo" />
        </a>
    );
};

const Header = ()=> (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li><i className="fa-solid fa-cart-arrow-down"></i> Cart</li>
            </ul>
        </div>
    </div>  
);

export default Header;