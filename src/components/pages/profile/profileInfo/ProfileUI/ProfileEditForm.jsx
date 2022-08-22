import useAuthorized from "../../../../../hooks/useAuthorized";
import {useFetchProfile, useGetProfile} from "../../profileApi";
import {useForm} from "react-hook-form";

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
                                    <div className="user-info__input-wrapper">
                                        <input {...register(name)} type="checkbox" defaultChecked={value}
                                               className="user-info__input user-info__input_checkbox"/>
                                    </div>
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
                <div className="user-info__btns">
                    <button className="btn user-info__save-info">Save</button>
                    <button onClick={() => setEditMode(false)} className="btn user-info__save-info">Back</button>
                </div>
            </form>
        </>
    )
}


export default ProfileEditForm