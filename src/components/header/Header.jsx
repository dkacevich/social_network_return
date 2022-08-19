import logo from '../../assets/logo.svg'
import './header.scss'

const Header = ({userData: {login, email}}) => {

    const user = (
        <div className='header__info'>
            <div className="header__box">
                <div className="header__login">{login}</div>
                <div className="header__email">{email}</div>
            </div>
            <button className="header__btn btn">{login ? 'Logout' : 'Login'}</button>
        </div>
    )


    return (
        <div className='header bg-sky-600'>
            <img className='header__logo' src={logo} alt=""/>
            {login ? user : <img className='header__user' src={user} alt=""/>}
        </div>
    )
}

export default Header