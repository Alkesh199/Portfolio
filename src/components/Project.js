import {PERSONAL_PROJECT} from "../../constants";
import {Link} from "react-router-dom";
const Project = () =>{
    return(
        <div className="main-full-width" id="projects">
             <div className ="main-div projects">
                     <div className="resume-left-side-div">
                             <p className="xl"><span>Projects</span></p>
                    </div>
                    <div className="resume-right-side-div">
                         {PERSONAL_PROJECT.map((pp)=>{
                            return (
                                <div className="box-div">
                                    <p className="project-name xs">{pp?.p_name}</p>
                                    <p className="project-details xxs">{pp?.p_desc}</p>
                                    {pp?.link?.map((link)=>{
                                           return (
                                            <>
                                               {link?.link_name &&  < p className="project-details xxs"><span className="link-name">{link?.link_name} : </span><a href={link?.link_url}>{link?.link_url}</a></p>}
                                            </>
                                           )
                                    })}
                                    
                                </div>
                            );
                         })}
                         
                    </div>
            </div>
        </div>
    )
}

export default Project;