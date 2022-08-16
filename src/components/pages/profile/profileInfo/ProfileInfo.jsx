import './ProfileInfo.scss'

const ProfileInfo = ({fullName, photos, status}) => {
    const img = photos?.small || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
    return (
        <div className="profile__user user-info">
            <img src={img} alt="" className='user-info__image'/>
            <div className="user-info__box">
                <h3 className="user-info__name">{fullName}</h3>
                <p className="user-info__status">{status || 'I don\'t have status :('}</p>
            </div>
        </div>
    )
}

export default ProfileInfo