import Navbar from './Navbar'
import Sidebar from './Sidebar'

const DefaultLayout = ({children}) => {
    
    return (
        <>
            <Navbar/>
            <div className='container' style={{ display: 'flex' }}>
                <Sidebar/>
                <div className='content'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default DefaultLayout