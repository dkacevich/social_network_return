import './ProfileInfo.scss'
import useAuthorized from "../../../../hooks/useAuthorized";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useFetchProfile, useFetchProfilePhoto, useFetchProfileStatus, useGetProfile} from "../profileApi";
import {MoonLoader} from "react-spinners";

const ProfileInfo = ({fullName, aboutMe, contacts, photos, status, yourProfile}) => {
    const [editMode, setEditMode] = useState(false);
    const [editStatusMode, setEditStatusMode] = useState(false);
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
        <div className="profile__user user-info">
            {!editMode && <div className="user-info__inner">
                <div className="user-info__image">
                    <img src={img} alt=""/>
                    {yourProfile && <label>Choose File<input type="file" onChange={changePhoto}/></label>}
                </div>
                <div className="user-info__box">
                    <h3 className="user-info__name">{fullName}</h3>
                    <p className="user-info__status">{status || 'I don\'t have status :('}</p>
                    <p className="user-info__about">{aboutMe || 'I don\'t have descr :('}</p>
                </div>
                <ProfileContacts contacts={contacts}/>
            </div>
            }
            {(yourProfile && !editMode && !editStatusMode) &&
               <div className="user-info__btns">
                   <button onClick={() => setEditMode(true)} className="user-info__btn btn">Edit profile(Under dev.)</button>
                   <button onClick={() => setEditStatusMode(true)} className="user-info__btn btn">Edit status(Under dev.)</button>
               </div>
            }
            {editMode && <ProfileEditForm setEditMode={setEditMode}/>}
            {editStatusMode && <StatusForm setEditMode={setEditStatusMode}/>}
        </div>
    )
}

const ProfileContacts = ({contacts}) => {

    const elems = Object.keys(contacts).filter(item => contacts[item]).map(item => (
        <li key={item} className='user-info__contacts-item'><span>{item}</span>: <a target='blank'
                                                                                    href={contacts[item]}>{contacts[item]}</a>
        </li>
    ))

    return (
        <div>
            {elems.length > 0 && <div className="user-info__contacts-label">Contacts:</div>}
            <ul className="user-info__contacts-list">
                {elems}
            </ul>
        </div>
    )
}
const ProfileEditForm = ({setEditMode}) => {
    const {id} = useAuthorized()
    const {data: profileData} = useGetProfile({id})
    const [fetchProfile] = useFetchProfile()

    const {register, handleSubmit} = useForm({
        mode: 'onBlur',
    })

    const profileDataArray = objToArray(profileData, []).slice(0, 4)

    const onSubmit = (data) => {
        fetchProfile(data)
    }

    return (
       <>
           <form onSubmit={handleSubmit(onSubmit)} className='user-info__form'>
               {
                   profileDataArray.map(({name, value}) => {
                       if (typeof (value) === 'boolean') {
                           return (
                               <div key={name} className="user-info__row">
                                   <div className="user-info__label">{name}:</div>
                                   <input {...register(name)} type="checkbox" defaultChecked={value}
                                          className="user-info__input input"/>
                               </div>
                           )
                       }
                       return (
                           <div key={name} className="user-info__row">
                               <div className="user-info__label">{name}:</div>
                               <input {...register(name)} type="text" defaultValue={value}
                                      className="user-info__input input"/>
                           </div>
                       )
                   })
               }
               <button className="btn user-info__save-info">Save</button>
           </form>
           <button onClick={() => setEditMode(false)} className="btn">Back</button>
       </>
    )
}

const StatusForm = ({setEditMode}) => {
    const [fetchStatus, result] = useFetchProfileStatus()
    const {register, handleSubmit} = useForm({
        mode: 'onBlur',
    })


    if (result.isLoading) return <MoonLoader/>

    const onSubmit = (status) => {
        fetchStatus(status)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('status')}/>
                <button className='btn'>Send</button>
            </form>
            <button onClick={() => setEditMode(false)} className="btn">Back</button>
        </>

    )
}

export default ProfileInfo


const objToArray = (obj, array) => {
    for (const key in obj) {
        if (typeof (obj[key]) === 'object') {
            objToArray(obj[key], array)
        } else {
            array.push({name: key, value: obj[key]})
        }
    }
    return array
}