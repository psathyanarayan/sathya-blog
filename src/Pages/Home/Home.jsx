import Header from '../../components/Header/Header';
import Post from '../../components/post/Post';
import SideBar from '../../components/SideBar/SideBar';
import axios from 'axios';
import './Home.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/posts"+search);

            setPosts(res.data);
        }
        fetchPost();
    }, [search]);
        return (
            <>
            <Header />
                <div className="Home">
                    <Post posts = {posts} />
                    <SideBar />
                </div>
        </>
            );

    
}




