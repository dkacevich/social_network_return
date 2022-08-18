import logo from '../../assets/logo.svg'
import user from '../../assets/icon.svg'
import './header.scss'
import {useSelector} from "react-redux";
import {MoonLoader} from "react-spinners";

const Header = () => {
    const authorized = useSelector(state => state.auth.authorized)
    const authData = useSelector(state => state.auth.authData)


    const user = (
        <div className='header__info'>
            <div className="header__box">
                <div className="header__login">{authData.login}</div>
                <div className="header__email">{authData.email}</div>
            </div>
            <button className="header__btn btn">{authorized ? 'Logout' : 'Login'}</button>
        </div>
    )


    return (
        <div className='header bg-sky-600'>
            <img className='header__logo' src={logo} alt=""/>
            {authorized ? user : <img className='header__user' src={user} alt=""/>}
        </div>
    )
}

export default Header