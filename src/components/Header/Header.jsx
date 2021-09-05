import  './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> Sathya's</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImage"
                src="./images/headerImg.jpg" alt="headerImg"
            />
            <img
                className="headerImage2"
                src="https://images.unsplash.com/photo-1510442650500-93217e634e4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80" alt=""
            />
        </div>
    );
}

export default Header;
