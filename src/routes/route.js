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
    const checkStatusAuth = localStorage.getItem('token_login') ? true : false

    return (
        <Routes>
            {

                publicRoutes.map((route, index) => {
                    // Check token authentication JWT
                    const Layout = checkStatusAuth ? (route.layout ? route.layout : DefaultLayout) : CommonLayout
                    let Page = route.component 
                    if (!checkStatusAuth) {
                        const common = ['Login', 'Register']
                        Page = common.includes(route.name) ? route.component : Login
                    }
                    
                    return (
                        <Route 
                            key={index} 
                            path={route.path} 
                            element={
                                <Layout>
                                    <Page/>
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