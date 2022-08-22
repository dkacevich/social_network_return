import bg from './../../../assets/bg.jpg'
import './profile.scss'
import ProfileInfo from "./profileInfo/ProfileInfo";
import ProfilePosts from "./profilePosts/ProfilePosts";
import {Navigate, useParams} from "react-router-dom";
import {MoonLoader} from "react-spinners";
import {useGetProfile, useGetStatus} from "./profileApi";


const Profile = ({authId}) => {
    let {id} = useParams();

    if (!id && !authId) {
        return <Navigate to='/login'/>
    } else if (!id) {
        id = authId
    }

    const {
        data: profileData,
        isLoading,
        isFetching
    } = useGetProfile({id})

    const {
        data: statusData,
    } = useGetStatus({id})


    if (isLoading || isFetching) {
        return <MoonLoader/>
    }

    return (
        <div className="profile">
            <img src={bg} alt="" className="profile__bg"/>
            <div className="profile__wrapper">
                <ProfileInfo yourProfile={id === authId} {...profileData} status={statusData}/>
                <ProfilePosts/>
            </div>
        </div>
    )
}


export default Profile

