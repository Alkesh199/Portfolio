import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Project from './Project';
const Resume = () =>{
    return(
         <div id="resume">
            <Experience></Experience>
        <Education></Education> 
        <Skills></Skills>
        <Project></Project>
         </div>
    )
}
export default Resume;