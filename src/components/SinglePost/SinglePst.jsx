import './singlepst.css';
import { useLocation } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import { Context } from '../../context/Context';
const SinglePst = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "https://sathyanarayan.herokuapp.com/images/"
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) { }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            window.location.reload();
            setUpdateMode(false)
        } catch (err) { }
    };



    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={PF + post.photo} alt="" className="wrapperImg" />

                )}

                {
                    updateMode ? <input type="text" autoFocus value={title} className="singlePostTitleInput" onChange={(e) => { setTitle(e.target.value) }} /> : (
                        <h1 className="singlePostTitle">{post.title}
                            {post.username === user?.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon far fa-edit" key="item1" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon far fa-trash-alt" key="item2" onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )}



                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <Link to={`/?user=${post.username}`} className=" mobAuth link"><b>{post.username}</b></Link> </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea
                        className="singlePostDescInput"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <p className="singlePostDesc"><Markdown options={{ forceBlock: true }}>{desc}</Markdown></p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>


        </div>

    );
}

export default SinglePst;
