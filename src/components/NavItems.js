import {Link} from "react-router-dom";

const NavItems=(props)=>{
    return(
        <ul className="header-ul" onClick={props?.onClick}>
                            <li><a href="#home" onClick={props?.onClick}>Home</a></li>
                            <li><a href="#about" onClick={props?.onClick}>About</a></li>
                            <li><a href="#resume" onClick={props?.onClick}>Resume</a></li>
                            <li><a href ="#contact" onClick={props?.onClick}>Contact</a></li>    
                        </ul>
    )
}

export default NavItems;