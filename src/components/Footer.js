import github_logo from '../assets/github_logo.png';
import hackerrank_logo from '../assets/hackerrank_logo.png';
import linkdin_logo from '../assets/linkdin_logo.png';
import { Link } from 'react-router-dom';
import { urls } from '../../constants';
import ContactInner from './ContactInner';

const Footer = () =>{
    return (
       
            <div className="main-full-width" id="footer">
                    <div className ="main-div footer">
                        <div className="footer-left-div">
                            
                            <p className='copyText md'><span>&copy;</span> April 2023</p>
                        </div>
                        <div className="footer-right-div">
                        <ContactInner></ContactInner>
                        </div>
                    </div>
            </div>
        
    );
}

export default Footer;