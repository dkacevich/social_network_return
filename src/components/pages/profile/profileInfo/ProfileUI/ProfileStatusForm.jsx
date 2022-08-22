import {useFetchProfileStatus} from "../../profileApi";
import {useForm} from "react-hook-form";
import {MoonLoader} from "react-spinners";

const StatusForm = ({setEditMode, oldStatus}) => {
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
            <form className='user-info__status-form status-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="status-form__label">Status:</div>
                <input className='input status-form__input' defaultValue={oldStatus} type="text" {...register('status')}/>
                <div className="status-form__btns">
                    <button className='btn status-form__btn'>Send</button>
                    <button onClick={() => setEditMode(false)} className="btn status-form__btn">Back</button>
                </div>
            </form>
        </>

    )
}

export default StatusForm