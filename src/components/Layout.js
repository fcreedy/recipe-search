import { Outlet } from 'react-router-dom'
import Navigation from './Navigation.js'

const Layout = () => {
    return(
        <div className="app-layout pl-16">
            
            <Navigation />

            <div className="page p-8">
                <Outlet />
            </div>
        
        </div>
    )
}

export default Layout