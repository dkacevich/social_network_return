const ProfileBaseInfo = ({editStatusMode, fullName, aboutMe, status}) => {
    return (
        <div className="user-info__box">
            <h3 className="user-info__name">{fullName}</h3>
            {!editStatusMode && <p className="user-info__status">{status || 'I don\'t have status :('}</p>}
            <p className="user-info__about">{aboutMe || 'I don\'t have descr :('}</p>
        </div>
    )
}

export default ProfileBaseInfo