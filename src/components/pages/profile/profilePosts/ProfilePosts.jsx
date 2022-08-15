import user from "../../../../assets/user.jpg";
import './ProfilePosts.scss'
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../profileSlice";
import {useState} from "react";

const ProfilePosts = () => {

    const [postText, setPostText] = useState('');

    const postsInfo = useSelector(({profile}) => profile.posts)
    const dispatch = useDispatch()

    const postElements = postsInfo.map(({id, text}) => (
        <div key={id} className="posts-profile__item">
            <img className='posts-profile__user' src={user} alt=""/>
            <div className="posts-profile__text">{text}</div>
        </div>
    ))

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost(postText))
        setPostText('')
    }


    return (
        <div className="profile__posts posts-profile">
            <div className="posts-profile__new ">
                <div className="posts-profile__title">Create new one</div>
                <form onSubmit={handleSubmit} className="posts-profile__form">
                    <input onChange={(e) => setPostText(e.target.value)}
                           value={postText}
                           type="text"
                           placeholder='Your news...'
                           className="input"
                    />
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