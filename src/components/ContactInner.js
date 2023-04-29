import github_logo from '../assets/github_logo.png';
import hackerrank_logo from '../assets/hackerrank_logo.png';
import linkdin_logo from '../assets/linkdin_logo.png';
import facebook_logo from "../assets/facebook_logo.png";
import insta_logo from "../assets/insta_logo.png";
import {Link} from "react-router-dom";
import { urls } from '../../constants';

const ContactInner = () =>{
    return(
             <div className="main-div">                                                                                                                                   
                   
                   <div className="img-div">
                         <Link to ={urls.github} target="_blank"><img src = {github_logo} alt="github"></img></Link>
                         <Link to ={urls.linkdin} target="_blank"><img src={linkdin_logo} alt="linkdin"></img></Link>
                         <Link to ={urls.hackerrank} target="_blank"><img src = {hackerrank_logo} alt="hackerrank"></img></Link>
                         <Link to ={urls.facebook} target="_blank"><img src = {facebook_logo} alt="facebook"></img></Link>
                         <Link to ={urls.instagram} target="_blank"><img src = {insta_logo} alt="instagram"></img></Link>
                   </div>
             </div>
    )
}

export default ContactInner;