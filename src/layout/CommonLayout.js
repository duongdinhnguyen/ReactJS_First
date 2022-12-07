import Navbar from './Navbar'

const CommonLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default CommonLayout