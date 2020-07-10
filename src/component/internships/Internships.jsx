import React from 'react'
import './Internships.css'
import DateRangeIcon from '@material-ui/icons/DateRange';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import BookIcon from '@material-ui/icons/Book';
import SchoolIcon from '@material-ui/icons/School';
import EmailIcon from '@material-ui/icons/Email';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import Line from '../line/Line'
import { NavLink } from "react-router-dom";


const Internships = () => {
    return (
        <div className = "main">
        <div className = "parent div">
        <div className = "onethalf">
        <h2>Internships</h2>
        <Line/>
        <h4>Full-Stack Developer</h4>
        <a href ="#hireACamp"><h5 className = "hireAcamp">HireACamp</h5></a>
        <span className = "intern-details">
        <p className = "duration"><DateRangeIcon color = "primary" style = {{"fontSize":"13px"}} /> June 2020 – August 2020 </p>
        
        <ul>
            <li>Managing the interchange of data between the server and the user</li>
            <li>Integrating the front end elements built by co-workers into the application</li>
        </ul>
        <h2>Projects</h2>
        <Line/>
        <h4>Timetable Generator Using Genetic Algorithms</h4>
        <span className = "project">
        <p className = "duration"><DateRangeIcon color = "primary" style = {{"fontSize":"13px"}} /> Feb 2020 – July 2020</p>
        <p className = "p-format"><strong>Objective:</strong> To automate the timetable generation process at Galgotias University.<br /><strong>Description:</strong> This Timetable generator is a full-fleshed Web-App powered by the Genetic Algorithm, can be used to schedule classes for the whole university. This timetable generator is not only limited to Galgotias University, and can be easily configured for other schools and colleges.<br/> <strong>Team Size:</strong>2 <br/><strong>Technologies:</strong>Python, JavaScript, React.js, GraphQL</p>
       <h4>KunalPant.com</h4>
       <p className = "duration"><DateRangeIcon color = "primary" style = {{"fontSize":"13px"}} /> May 2020</p>
       <p className = "p-format"><strong>Objective:</strong>Personal website <br /><strong>Description: </strong>This is my Website made with ❤ and React<br/><strong>Team Size: </strong>Individual<br/><strong>Technologies:</strong>JavaScript, React.js, Material-UI</p>
       <h4>Mess Management System</h4>
       <p className = "duration"><DateRangeIcon color = "primary" style = {{"fontSize":"13px"}} /> Feb 2020 – April 2020</p>
       <p className = "p-format"><strong>Objective:</strong>To develop an online platform for hostel students.<br/><strong>Description: </strong>This Mess Management System allows the student to Rate Food, Give Feedback, Choose and View menu, and allows admin the view the feedback and help them generate better a Timetable.<br/><strong>Team Size: </strong>2<br/><strong>Technologies:</strong>JavaScript, React.js, firebase</p>
        </span>
        <h2>Volunteer</h2>
        <Line />
        <h4>LDExplained.com</h4>
        <NavLink exact to = "/Lens-Certificate"><h5 className = "hireAcamp">Lens Foundation</h5></NavLink>
        {/* <a href ="#lens-foundation"></a> */}
        <p className = "duration"><DateRangeIcon color = "primary" style = {{"fontSize":"13px"}} /> May 2020 – June 2020 </p>
        <p className = "p-format">Developed an online blog website for Lens foundation for providing information about Learning Disabilities using WordPress.<br/><strong>Team Size:</strong> 2</p>
   
        <h2>Publications</h2>
        <Line/>
        <p className = "p-format"><strong>Submitted book chapter, </strong>Machine Learning Algorithms for Healthcare Data Analytics</p>
        <p className = "duration2"><DateRangeIcon color = "primary" style = {{"fontSize":"13px"}} /> May 2020 <br/><BookIcon color = "primary" style = {{"fontSize":"13px"}} />  CRC PRESS</p>
        <br/>
        </span>
        </div>
        </div>


        {/* //NOW 2nd portion og screen */}
        <div className = "parent-div2">
            <div className = "other-half">
            <h2>Skills</h2>
            <Line/>
            <h4>Languages</h4>
            <p className = "p-format2">Python<span className = "record-icon1"><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /></span></p>
            <p className = "p-format2">C++<span className = "record-icon2"><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "disabled" style = {{"fontSize":"25px"}} /></span></p>
            <p className = "p-format2">JavaScript<span className = "record-icon3"><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "primary" style = {{"fontSize":"25px"}} /><FiberManualRecordIcon color = "disabled" style = {{"fontSize":"25px"}} /></span></p>
        
            <h4>Tools and Technologies</h4>
            <Line/>
            <div className ="btn">
                <button className ="btn-inside">React.js</button><button className ="btn-inside">Node.js</button><button className ="btn-inside">AWS</button><button className ="btn-inside">MongoDB</button><button className ="btn-inside">REST</button>
            </div><br/>
            <h2>Education</h2>
            <Line /><br/>
            <h4><BookIcon color = "primary" style = {{"fontSize":"13px"}} /> B. Tech in Computer Science</h4>
            <p className = "duration"><SchoolIcon color = "primary" style = {{"fontSize":"13px"}} /><strong> Galgotias University, </strong>8.17 CGPA</p>
            <p className = "duration"><DateRangeIcon color = "primary" style = {{"fontSize":"13px"}} /> <strong>September 2017 – May 2021</strong></p>
            <br />
            <h2>Strength</h2>
            <Line />
            <div className ="btn" >
            <button className ="btn-inside2">Teamwork</button><button className ="btn-inside2">Critical Thinking</button><button className ="btn-inside2">Problem Solving</button>
            </div>
        
            <h2>Most Proud Of</h2>
            <Line/><br/>
            <p><BookIcon color = "primary" style = {{"fontSize":"13px"}} /> Finalist of<strong> Smart India Hackathon, 2019 </strong></p>
            <h2>References</h2>
            <Line/><br/>
            <h5>Mitul Agrawal,</h5>
            <p className = "duration2"><StoreMallDirectoryIcon color = "primary" style = {{"fontSize":"13px"}} /> Co-Founder, <span className ="a-links"><a href ="https://www.hireacamp.com/"><strong>HireACamp</strong></a></span> </p>
            <p className = "duration2"><EmailIcon color = "primary" style = {{"fontSize":"13px"}} /> mitul@hireacamp.com </p>
            <h5>Ms. Indra Kumari, </h5>
            <p className = "duration2"><SchoolIcon color = "primary" style = {{"fontSize":"13px"}} /> Professor,<strong>Galgotias University,</strong>  Greater Noida </p>
            <p className = "duration2"><EmailIcon color = "primary" style = {{"fontSize":"13px"}} /> indramurugesh25@gmail.com</p>
            <h5>Ketki Agarwal,</h5>
            <p className = "duration2"><StoreMallDirectoryIcon color = "primary" style = {{"fontSize":"13px"}} />  	Trustee,<span className = "a-links"><a href = "http://www.lensfoundation.com/"><strong> LENS FOUNDATION </strong></a></span> </p>
            <p className = "duration2"><EmailIcon color = "primary" style = {{"fontSize":"13px"}} /> ketki@lensfoundation.com</p>
            
            </div>
        </div>
    </div>
    )
}

export default Internships
