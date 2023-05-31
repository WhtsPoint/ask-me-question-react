import { Link, Outlet } from 'react-router-dom'
import Logo from '../Logo/Logo'
import '../../styles/customButton.css'
import './mainPage.css'

function MainPage() {
    return (<div className='mainPage'>
        <Logo />
        <div className='mainPage__buttonList'>
            <Link className='customButton' to={'/'}>Поставити запитання</Link>
            <Link className='customButton' to={'/history'}>Історія</Link>
        </div>
        <div className='mainPage__body'>
            <Outlet />
        </div>
    </div>)
}

export default MainPage