import BlogPost from '../../components/blogPost/BlogPost';
import './Post.css';

const Post = ({posts}) => {
    return (
        <div className="posts">
            {posts.map(p => (
                <BlogPost post={p} />
            ))}
            
            
        </div>
        
    );
}

export default Post;
