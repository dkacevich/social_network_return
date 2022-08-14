import user from "../../../../assets/user.jpg";
import './ProfilePosts.scss'

const ProfilePosts = () => {
    const postsInfo = [
        {id: 0, text: 'Hey, why nobody loves me?!'},
        {id: 1, text: 'Hey, why nobody loves me?!'},
        {id: 2, text: 'Hey, why nobody loves me?!'},
    ]

    const postElements = postsInfo.map(({id, text}) => (
        <div key={id} className="posts-profile__item">
            <img className='posts-profile__user' src={user} alt=""/>
            <div className="posts-profile__text">{text}</div>
        </div>
    ))

    return (
        <div className="profile__posts posts-profile">
            <div className="posts-profile__new ">
                <div className="posts-profile__title">Create new one</div>
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