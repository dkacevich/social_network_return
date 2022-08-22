import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Login.scss'
import {useGetCaptchaUrl, useLogin} from "../../app/authSlice";
import useAuthorized from "../../../hooks/useAuthorized";
import {Navigate} from "react-router-dom";
import {useRef} from "react";


const schema = yup.object({
    email: yup.string().email('Write correct email').required('Required'),
    password: yup.string().required('Required'),
}).required();


const Login = () => {
    const captchaImg = useRef(null);

    const [login] = useLogin()
    const [getCaptchaUrl] = useGetCaptchaUrl()

    const {authorized} = useAuthorized()

    const {register, reset, handleSubmit, clearErrors, setError, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',

    })

    if (authorized) return <Navigate replace to='/profile'/>

    const onSubmit = (data) => {
        login(data).then(res => {
            if (res.data.resultCode === 1) {
                setError('server.wrong', {type: 'server', message: 'Incorrect Email or Password'})
            } else if (res.data.resultCode === 10) {
                getCaptchaUrl().then(captcha => {
                    setError('server.captcha', {type: 'server', message: 'Please do Captcha'})
                    captchaImg.current = captcha.data.url
                })
            } else {
                reset()
            }
        })
    }
    const serverError = errors.server?.captcha.message || errors.server?.wrong.message

    return (
        <div className='page login'>
            <h2 className="page-title login__title">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                <div className="login__row">
                    <input onClick={() => clearErrors('server')} placeholder='email'
                           className="login__input input" {...register('email')}/>
                    <p>{errors.email?.message}</p>

                </div>
                <div className="login__row">
                    <input onClick={() => clearErrors('server')} placeholder='password'
                           className="login__input input" {...register('password')}/>
                    <p>{errors.password?.message}</p>
                </div>
                <label className="login__row login__row-checkbox">
                    <input type="checkbox" className="login__input input" {...register('rememberMe')}/>
                    <span>Remember me</span>
                </label>
                <div style={{display: captchaImg.current ? 'block' : 'none'}} className="login__row">
                    <img src={captchaImg.current} alt=""/>
                    <input onClick={() => clearErrors('server')} placeholder='captcha'
                           className="login__input input" {...register('captcha')}/>
                    <p>{errors.password?.message}</p>
                </div>
                <p className='login__server-error'
                   style={{display: serverError ? 'block' : 'none'}}>{serverError}</p>
                <button disabled={!isValid} className="login__btn btn">Login</button>
            </form>
        </div>
    )
}


export default Login