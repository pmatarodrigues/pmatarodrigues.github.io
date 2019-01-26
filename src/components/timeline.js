import React from "react"
import '../styles/styles.css'
import '../styles/skillsStyles.css'


export default class Timeline extends React.Component {


    render(){
        return(
            <div id="timeline" className="skill-box">
                <strong className="card-title" style={{color: "black"}}>
                    Timeline
                </strong>    
                <TimelineElement year="2016" title="Inspire Portugal" description="Participation in the Web Summit's student reunion." img="assets/timeline/websummit.jpg" />            
                <TimelineElement year="2016" title="SPEC" description="Website/blog about the recent advances in technology." img="assets/timeline/speclogo.png" />            
                <TimelineElement year="2017" title="Cybercrime and Cybersecurity" description="Participation in two seminars at IPVC." img="assets/timeline/seminarioipvc.jpg" />            
                <TimelineElement year="2017" title="Refood Volunteering" description="Volunteering at the Refood organization of Viana do Castelo." img="assets/timeline/refoodviana.png" />            
                <TimelineElement year="2018" title="Web-Security - HandsOn" description="Workshop at the National Meeting of Computer Science Students." img="assets/timeline/enei.jpg" />            

            </div>
        );
    }
}


const TimelineElement = (props) => {

    return(
        <div className="timeline-element">                        
            <div>            
                <p className="element-description">
                    <strong className="element-title">
                        <strong style={{color: '#BDBDBD'}}>[{props.year}]</strong> {props.title}
                    </strong>
                    <br></br>
                    {props.description}
                </p>
                <img className="timeline-pic" src={props.img}/>
                <br></br>
            </div>
        </div>
    );

}
