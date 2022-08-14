import logo from '../../assets/logo.svg'
import user from '../../assets/icon.svg'
import './header.scss'

const Header = () => {
    return (
        <div className='header bg-sky-600'>
            <img className='header__logo' src={logo} alt=""/>
            <img className='header__user' src={user} alt=""/>
        </div>
    )
}

export default Header