import {useFetchProfilePhoto} from "../../profileApi";

const ProfileAvatar = ({yourProfile, photos}) => {
    const [fetchPhoto] = useFetchProfilePhoto()

    const changePhoto = (e) => {
        if (e.target.files[0]) {
            const formData = new FormData();
            formData.append('image', e.target.files[0])
            fetchPhoto(formData)
        }
    }

    const img = photos?.large || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'

    return (
        <div className="user-info__image">
            <img src={img} alt=""/>
            {yourProfile && <label>Choose File<input type="file" onChange={changePhoto}/></label>}
        </div>
    )
}

export default ProfileAvatar