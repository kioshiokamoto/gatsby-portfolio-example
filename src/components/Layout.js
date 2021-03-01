import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright &copy; {new Date().getFullYear()} Web dev</p>
            </footer>
        </div>
    )
}

export default Layout
