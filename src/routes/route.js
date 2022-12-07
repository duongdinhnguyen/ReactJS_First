import { Route, Routes } from 'react-router-dom'
import {Home, Following, Profile, Register, Login} from '../pages'
import { DefaultLayout, CommonLayout } from '../layout'

// Common - Guest
const publicRoutes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/following', component: Following, name: 'Following' },
    { path: '/profile', component: Profile, name: 'Profile' },
    { path: '/register', component: Register, name: 'Register', layout: CommonLayout },
    { path: '/login', component: Login, name: 'Login', layout: CommonLayout },
]

// Auth
const privateRoutes = [

]

const Router = () => {

    return (
        <Routes>
            {
                publicRoutes.map((route, index) => {
                    const Layout = route.layout || DefaultLayout

                    return (
                        <Route 
                            key={index} 
                            path={route.path} 
                            element={
                                <Layout>
                                    <route.component/>
                                </Layout>
                            }
                        />
                    )
                }
                )
            }
        </Routes>
    )
}
export {publicRoutes, privateRoutes}
export default Router