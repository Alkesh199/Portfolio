import {EXPD} from "../../constants.js";
const Experience = ()=>{
    console.log(EXPD);
    return(
        <div className="main-full-width" id="experience">
             <div className ="main-div experience">
                     <div className="resume-left-side-div">
                             <p className="xl"><span>Experience</span></p>
                    </div>
                    <div className="resume-right-side-div">
                        {EXPD.map((obj)=>{
                            return <div className="box-div">
                                  <p className="company-name sm">{obj?.comp_name}</p>
                                  <p className="designation xs">{obj?.designation}</p>
                                  <p className="duration xxs">{obj?.duration}</p>
                                  {
                                    obj.projects.map((project)=>{
                                        return <>
                                               <p className="project-name xs">{project?.project_name}</p>
                                               <ul className="project-details xxs">
                                                    
                                                    {project?.project_resp.map((li_item)=>{
                                                        return <li key={Math.random()}>{li_item}</li>                                                    })}

                                                </ul>
                                        </>
                                    })
                                  }
                            </div>
                        })}
                     </div>
                </div>
        </div>
    );
}

export default Experience;