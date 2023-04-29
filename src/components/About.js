import { about_me } from "../../constants";
import  profile_pic  from "../assets/profile_pic.jpg";
const About = () =>{
    return(
        <>
           <div className="main-full-width" id="about">
                    <div className ="main-div about">
                        <div className="about-left-div">
                            <img src={profile_pic} alt="profile pic"></img>
                        </div>
                        <div className="about-right-div">
                            <p className="about-me-heading md">About me</p>
                            <p className="description sm">{about_me.description}</p>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default About;