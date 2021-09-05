import './BlogPost.css';
import { Link } from "react-router-dom";
const BlogPost = ({ post }) => {
    const PF = "https://sathyanarayan.herokuapp.com/images/"
    return (
        <div className="BlogPosts">
            {post.photo && (<img className="postImg" src={PF+post.photo} alt="" />)}
            
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCat"><Link to={`/?cat=${c}`} className="link cat">{c}</Link></span>
                        
                    ))}
                    
                </div>
                <Link to={`/posts/${post._id}`} className="mobTitle link">
                <span className="postTitle">{post.title}</span>
                </Link>
                
                <hr />
                <span className="postdate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDec">{post.desc}</p>
        </div>
    );
}

export default BlogPost;
