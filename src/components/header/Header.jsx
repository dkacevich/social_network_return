import logo from '../../assets/logo.svg'
import './header.scss'
import {useLogout} from "../app/authSlice";
import {Link} from "react-router-dom";

const Header = ({userData: {login, email}}) => {

    const [logout, result] = useLogout()

    const user = (
        <div className='header__info'>
            <div className="header__box">
                <div className="header__login">{login}</div>
                <div className="header__email">{email}</div>
            </div>
            <button onClick={logout} className="header__btn btn">Logout</button>
        </div>
    )


    return (
        <div className='header bg-sky-600'>
            <img className='header__logo' src={logo} alt=""/>
            {login ? user : <Link className="header__btn btn" to='/login'>Login</Link>}
        </div>
    )
}

export default Header