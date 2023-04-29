import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from "./Header";
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Project from './Project';
import { BrowserRouter } from 'react-router-dom';
import Resume from './Resume';
const AppLayout = ()=>{
    return (
        <BrowserRouter>
     <React.Fragment>
        <Header></Header>
        <Home ></Home>
        <About ></About>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
     </React.Fragment>
     </BrowserRouter>
    
     
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);