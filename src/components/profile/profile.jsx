import './profile.scss';
import Mypost from './MyPosts/mypost';
import Profileinfo from './profileInfo/profileinfo';

const Profile = () => {
    return(
      <div className="page">
        <Profileinfo/>
        <Mypost/>
      </div>
    );
}
export default Profile;