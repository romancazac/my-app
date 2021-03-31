import './Post.scss';

const Post = (props) => {
    return(
     <div className="post">
        <img src="https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380" alt="" className="post__img"/>
        {props.message}
        <div>
           <span>like</span> 
        </div>
        
     </div>
    );
}
export default Post;