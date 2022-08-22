import './ProfileInfo.scss'
import {useState} from "react";
import ProfileAvatar from "./ProfileUI/ProfileAvatar";
import ProfileBtns from "./ProfileUI/ProfileBtns";
import ProfileBaseInfo from "./ProfileUI/ProfileBaseInfo";
import ProfileEditForm from "./ProfileUI/ProfileEditForm";
import StatusForm from "./ProfileUI/ProfileStatusForm";
import ProfileContacts from "./ProfileUI/ProfileContacts";


const ProfileInfo = ({fullName, aboutMe, contacts, photos, status, yourProfile}) => {
    const [editMode, setEditMode] = useState(false);
    const [editStatusMode, setEditStatusMode] = useState(false);


    return (
        <div className="profile__user user-info">
            {!editMode && <div className="user-info__inner">
                <ProfileAvatar yourProfile={yourProfile} photos={photos}/>
                <ProfileBaseInfo aboutMe={aboutMe} editStatusMode={editStatusMode} status={status} fullName={fullName}/>
                <ProfileContacts contacts={contacts}/>
            </div>
            }
            {(yourProfile && !editMode && !editStatusMode) &&
                <ProfileBtns setEditMode={setEditMode} setEditStatusMode={setEditStatusMode}/>}
            {editMode && <ProfileEditForm setEditMode={setEditMode}/>}
            {editStatusMode && <StatusForm oldStatus={status} setEditMode={setEditStatusMode}/>}
        </div>
    )
}


export default ProfileInfo


