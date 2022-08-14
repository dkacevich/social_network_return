import user from "../../../../assets/user.jpg";
import './ProfilePosts.scss'
import {useDispatch, useSelector} from "react-redux";

const ProfilePosts = () => {

    const postsInfo = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const postElements = postsInfo.map(({id, text}) => (
        <div key={id} className="posts-profile__item">
            <img className='posts-profile__user' src={user} alt=""/>
            <div className="posts-profile__text">{text}</div>
        </div>
    ))

    return (
        <div className="profile__posts posts-profile">
            <div className="posts-profile__new ">
                <div onClick={() => dispatch({type: 'LOG'})} className="posts-profile__title">Create new one</div>
                <form className="posts-profile__form">
                    <input type="text" placeholder='Your news...' className="input"/>
                    <button className="btn">Send</button>
                </form>
            </div>
            <div className="posts-profile__recent">
                <div className="posts-profile__title">Recent posts</div>
                {postElements}
            </div>
        </div>
    )
}

export default ProfilePosts