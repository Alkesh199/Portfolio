import gmail_logo from "../assets/gmail_logo.png";
import phone_logo from "../assets/phone_logo.png";

const Contact = () =>{
    return(
             
        <div className="main-full-width" id="contact">
                <div className ="main-div contact">
                   <p className="contact-text sm">I am constantly exploring opportunities within the field of responsive website development. If you are aware of or having any open job position in Frontend or React development, or simply wish to connect, kindly feel free to reach out to me. I would be more than happy to hear from you.</p>
                   <p className='contact-text gmail sm'> <img src={gmail_logo}></img><a href="mailto:alkeshKumar199@gmail.com">alkeshKumar199@gmail.com</a></p>
                   <p className='contact-text phone sm'><img src={phone_logo}></img>
                   <a href="tel:8619202408"> +918619202408</a></p>
                </div>
        </div>
    );
}

export default Contact;