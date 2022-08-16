import bg from './../../../assets/bg.jpg'
import './profile.scss'
import ProfileInfo from "./profileInfo/ProfileInfo";
import ProfilePosts from "./profilePosts/ProfilePosts";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfile, getStatus} from "./profileSlice";
import {MoonLoader} from "react-spinners";


const Profile = () => {

    const dispatch = useDispatch()
    let {id} = useParams();

    const profile = useSelector(state => state.profile.userProfile)
    const status = useSelector(state => state.profile.status)
    const loading = useSelector(state => state.profile.loading)
    const error = useSelector(state => state.profile.error)


    useEffect(() => {
        dispatch(getProfile(id))
        dispatch(getStatus(id))
    }, [id]);

    if (loading) {
        return <MoonLoader/>
    } else if (error) {
        console.log('error')
    }

    return (
        <div className="profile">
            <img src={bg} alt="" className="profile__bg"/>
            <div className="profile__wrapper">
                <ProfileInfo {...profile} status={status}/>
                <ProfilePosts/>
            </div>
        </div>
    )
}


export default Profile

