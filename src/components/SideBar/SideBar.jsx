import axios from 'axios';
import { useEffect, useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
const SideBar = () => {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("./categories");
            setCats(res.data)
        }
        getCats()
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sideBarImg"
                    src="./images/sa.jpg" alt="sidebar pro"/>
                <p className="aboutMe">My name is P Sathya Narayan. I created this website to share my perspectives on technology and philosophy</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`} className="link"> <li className="sideBarListItems">{c.name}</li></Link>
                       
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                <i className="sideBar-icon fab fa-linkedin"></i>
                <i className="sideBar-icon fab fa-instagram"></i>
                <i className="sideBar-icon fab fa-github"></i>
                <i className="sideBar-icon fab fa-youtube"></i>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
