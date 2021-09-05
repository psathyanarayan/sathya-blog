import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import './write.css';

const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const { user } = useContext(Context);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            cat
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload",data)
            } catch (err) {
                
            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/posts/"+res.data._id )
        
        } catch (error) {
            
        }
    }
    return (
        <div className="write">
            {file && (
                 <img src={URL.createObjectURL(file)} className="fileImg" alt="" srcset="" />
            )}
           
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFromGroup">
                    <label htmlFor="fileInput"><i className="addIcon fas fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{ display: "none"}} onChange={e=>setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>setTitle(e.target.value)} />
                </div>
                <div className="writeFromGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}></textarea>
                    <textarea placeholder="Category" ></textarea>
                    </div>
                   
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    );
}

export default Write;
