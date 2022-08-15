import user from "../../../../assets/user.jpg";
import './ProfileInfo.scss'

const ProfileInfo = () => {
    return (
        <div className="profile__user user-info">
            <img src={user} alt="" className='user-info__image'/>
            <div className="user-info__box">
                <h3 className="user-info__name">Dima Katsevich</h3>
                <p className="user-info__status">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
                    obcaecati?</p>
            </div>
        </div>
    )
}

export default ProfileInfo