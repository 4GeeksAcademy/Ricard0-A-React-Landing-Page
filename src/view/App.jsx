import React from 'react'
import { Navbar } from '../js/component/Navbar.jsx';
import Jumbotrom from '../js/component/Jumbotron.jsx'
import Cards from '../js/component/Cards.jsx';
import Footer from '../js/component/Footer.jsx';

function App() {
    return (
        <>
        <Navbar></Navbar>
        <div className="container">
            <Jumbotrom />
            <Cards></Cards>
        </div>
        <Footer></Footer>
       </>)
}


export default App;