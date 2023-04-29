import ProgressBar from "./ProgressBar.js";
import { SKILLS } from "../../constants.js";
export {ProgressBar} from "./ProgressBar.js"
const Skills =()=>{
    return(
        <div className="main-full-width" id="skills">
            <div className ="main-div skills">
                <div className="resume-left-side-div">
                    <p className="xl"><span>Skills</span></p>
                </div>
                <div className="resume-right-side-div">
                     
                         {SKILLS.map((obj)=>{
                            return <div className="skills-progress-div">
                            <p className="sm">{obj.name}</p>
                            <ProgressBar value={obj.value}></ProgressBar>
                          </div>
                            
                         })}
                      
                    
                       
                </div>
            </div>
        </div>
    )
}

export default Skills;