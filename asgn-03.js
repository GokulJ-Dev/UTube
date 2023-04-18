import React from 'react';
import ReactDOM from "react-dom/client";

//React.CreateElement()

const header = React.createElement("div", { className: "title" }, [React.createElement("h1", {}, "Hello H1"),
React.createElement("h2", {}, "Hello H2"), React.createElement("h3", {}, "Hello H3")]);

console.log(header);

//jsx

const HeaderComponent = () => (
    <div class='title'>
        <h1 id="h1 type">Hello H1 from jsx element</h1>
        <h2 id="h2 type">Hello H2 from jsx element</h2>
        <h3 id="h3 type">Hello H3 from jsx element</h3>
        {console.log(80 + 20)}
    </div>
);

//searchbar -> logo on the left, search bar on middle, user icon on right, css
const SearchBar = () => {
    return (
        <div className='header'>
            <img className='logo' src='https://cdn-icons-png.flaticon.com/512/48/48968.png' alt='Utube' />
            <input type="text" name="search" placeholder="search here" className="search" />
            <img className="user" src='https://d29fhpw069ctt2.cloudfront.net/icon/image/37746/preview.svg' alt="user" />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SearchBar />);