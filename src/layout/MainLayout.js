import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MainLayout = (props) => {
    return (
        <React.Fragment>
            <Navbar />
                {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout;
