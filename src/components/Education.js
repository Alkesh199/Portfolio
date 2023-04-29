import {EDU} from "../../constants.js";
const Education = ()=>{
    return(
        <div className="main-full-width" id="education">
            <div className ="main-div education">
                <div className="resume-left-side-div">
                    <p className="xl"><span>Education</span></p>
                </div>
                <div className="resume-right-side-div">
                       

                       {
                        EDU.map((obj)=>{
                            return <div className="box-div">
                                    <p className="course-name sm">{obj.course}</p>
                                    <p className="institue-name xs">{obj.institute}</p>
                                    <p className="duration xxs">{obj.duration}</p>
                                    <p className="marks xxs">{obj.marks}</p>
                                 </div>
                            })
                       }
                </div>
            </div>
        </div>
    );
}

export default Education;