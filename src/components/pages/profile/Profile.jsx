import bg from './../../../assets/bg.jpg'
import './profile.scss'
import ProfileInfo from "./profileInfo/ProfileInfo";
import ProfilePosts from "./profilePosts/ProfilePosts";


const Profile = () => {
    return (
        <div className="profile">
            <img src={bg} alt="" className="profile__bg"/>
            <div className="profile__wrapper">
                <ProfileInfo/>
                <ProfilePosts/>
            </div>
        </div>
    )
}

export default Profile

