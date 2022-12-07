import {Link} from 'react-router-dom'
import {publicRoutes} from '../routes'
import '../App.css'

const Navbar = () => {

    const logOut = () => {
        localStorage.removeItem('token')
        window.location = 'http://localhost:3000/login'
    }
    return (
        <>
            <ul className='nav-bar'>
                {
                    publicRoutes.map((route, index) => (
                        <Link key={index} to={route.path}>{route.name}</Link>
                    ))
                }
                <Link onClick={logOut}>Logout</Link>

            </ul>
            <hr/>
        </>
    )
}

export default Navbar