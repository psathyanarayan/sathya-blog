import './single.css';

import SinglePst from '../../components/SinglePost/SinglePst';
import SideBar from '../../components/SideBar/SideBar';
const Single = () => {
    return (
        <div className="single">
            <SinglePst />
            <SideBar />
        </div>
    );
}

export default Single;
