import bg from './../../../assets/bg.jpg'
import './profile.scss'
import ProfileInfo from "./profileInfo/ProfileInfo";
import ProfilePosts from "./profilePosts/ProfilePosts";
import {Navigate, useParams} from "react-router-dom";
import {MoonLoader} from "react-spinners";
import {useGetProfile, useGetStatus} from "./profileApi";


const Profile = ({authId}) => {
    let {id} = useParams();
    id = Number(id)

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
        isLoading: statusLoading,
        isFetching: statusFetching
    } = useGetStatus({id})


    if (isLoading || isFetching || statusLoading || statusFetching) {
        return <MoonLoader/>
    }

    return (
        <div className="profile">
            <img src={bg} alt="" className="profile__bg"/>
            <div className="profile__wrapper">
                <ProfileInfo yourProfile={id === authId} {...profileData} status={statusData}/>
                <ProfilePosts photos={profileData.photos}/>
            </div>
        </div>
    )
}


export default Profile

