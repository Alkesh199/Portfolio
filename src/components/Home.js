import { basic_info } from "../../constants";
import Typewriter from "typewriter-effect";
import ContactInner from "./ContactInner";
const Home = () =>{

    
    return(
       <>
          <div className="main-full-width" id="home">
                    <div className ="main-div home">
                        <p className="name xl">Hi, my name is <span className="xxl">{basic_info.name}.</span></p>
                        {/* <p className="designation xl">I'm  a<span className="xxl">{basic_info.designation}</span></p> */}
                        <p className="designation xl"><Typewriter
                                options={{
                                strings: ['I am a Frontend Developer.', 'I am in Love with React.'],
                                autoStart: true,
                                loop: true,
                                }}
                            /></p>
                        <p className="description sm">{basic_info.short_desc}</p>
                    </div>
                    
                        <ContactInner></ContactInner>
                  

                </div>
       </>
    );
}

export default Home;