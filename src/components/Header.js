import NavItems from "./NavItems";
import hamburgur_icon from "../assets/hamburger-icon.png";
import hamburgur_close from "../assets/hamburger-close.png";
import {useState} from "react";
const Header=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
             <>
                <div className="main-full-width header large-screen">
                    <div className ="main-div sm" id="header">
                        <NavItems ></NavItems>
                    </div>
                </div>

                <div className="main-full-width header small-screen">
                    <div className ="main-div sm" id="header">
                        {!isOpen && <img src={hamburgur_icon} onClick = {()=>setIsOpen(true)}></img>}
                        {isOpen && <img src={hamburgur_close} onClick = {()=>setIsOpen(false)}></img>}
                        {isOpen && <NavItems onClick={toggle}></NavItems>}
                    </div>
                </div>

            </>
            
                
        );  
}

export default Header;