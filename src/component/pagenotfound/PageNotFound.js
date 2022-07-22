import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { Helmet } from 'react-helmet';
function PageNotFound() {
    return (
        <>
            <Helmet>
                <title>Chocolate Monkeys | Page not found</title>
            </Helmet>
            <Navbar />
            <div>PageNotFound</div>
            <Footer />
        </>

    )
}

export default PageNotFound