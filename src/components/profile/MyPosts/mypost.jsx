import './mypost.scss';
import Post from './Post/Post';
const Mypost = () => {
    return(
     <div className="mypost">
        <div className="mypost__name">My post</div>
        <textarea className="mypost__mesage" placeholder="your message"></textarea>
        <button className="mypost__btn"> send</button>
        <div className="mypost__items">
           <Post message='hello frind'/>
           <Post message='hi'/>
        </div>
     </div>
     
    );
}
export default Mypost;