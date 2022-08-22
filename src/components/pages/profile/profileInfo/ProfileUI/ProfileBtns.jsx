const ProfileBtns = ({setEditMode, setEditStatusMode}) => {
    return (
        <div className="user-info__btns">
            <button onClick={() => setEditMode(true)} className="user-info__btn btn">Edit profile</button>
            <button onClick={() => setEditStatusMode(true)} className="user-info__btn btn">Edit status</button>
        </div>
    )
}

export default ProfileBtns