import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
import './layout.css'

function Layout() {
    return (<div className='main'>
        <div className='main__body'><Outlet /></div>
        <Footer />
    </div>)
}

export default Layout