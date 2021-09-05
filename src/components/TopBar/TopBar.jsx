import { Link } from "react-router-dom";
import './TopBar.css';
import { useContext, useState } from 'react';
import { Context } from "../../context/Context";
const TopBar = () => {
    const { user,dispatch } = useContext(Context);
    const [isMobile, setIsMobile] = useState(false);
    const PF = "https://sathyanarayan.herokuapp.com/images/";
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
  
    return (
        <div className="top">
            <div className="topLeft">
                <i className="top-icon fab fa-linkedin"></i>
                <i className="top-icon fab fa-instagram"></i>
                <i className="top-icon fab fa-github"></i>
                <i className="top-icon fab fa-youtube"></i>
            </div>
            <div className= {isMobile ? "mobTop" : "topCenter"}>
                <ul className="toplist" onClick={() => setIsMobile(false)}>
                    <li className= "topListItem home"><Link className={isMobile ? "mobNav" : "link"} to = "/">HOME </Link></li>
                    <li className="topListItem"><Link className={isMobile ? "mobNav" : "link"} to = "/">ABOUT</Link></li>
                    <li className="topListItem"><Link className={isMobile ? "mobNav" : "link"} to = "/write">WRITE</Link></li>
                    <li className={isMobile ? "mobNav" : "topListItem link"} onClick = {handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            
            <div className={isMobile ? "mobTop" : "topRight"} >
                {
                    user ? (
                        <Link to ="/settings">
                            <img  src = {PF+user.profilePic} className="topImage" alt="profile pic"/>
                        </Link>

                    ) : (
                            <ul className="toplist">
                                <li className="topListItem log"><Link className={isMobile ? "mobNav" : "link"} to = "/login">LOGIN</Link></li>
                                <li className="topListItem reg"><Link className={isMobile ? "mobNav" : "link"} to = "/register">REGISTER</Link></li>
                                <li className="topListItem" style = {{color:"#d4af59"}}>Sathya's Blog</li>
                            </ul>
                    )
                }
                <i className="topSearch fas fa-search"></i>
               
            </div>
            
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </div>
    );
}

export default TopBar;
