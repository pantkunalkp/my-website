import React from "react";
import "./Intro.css";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Intro = () => {
  return (
    <div>
      <div className="intro-part">
        <p>
          <span className="my-name">KUNAL PANT</span> <br />
          Software Engineer
        </p>
        <div className="internal-details1">
          <span className = "email">
            <EmailIcon color="primary" style={{ fontSize: "13px" }} />
            <a href ="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"> kunalpant95@gmail.com</a>
          </span>
          <span className = "location">
            <LocationOnIcon color="primary" style={{ fontSize: "13px" }} />
            <a href= "https://www.google.com/maps/place/Bithoria+No1,+Uttarakhand/@29.2315474,79.5074566,14.9z/data=!4m8!1m2!2m1!1sShyamlata+Kunj,+Bithoria+No.+1,+Haldwani,+UK,+India!3m4!1s0x39a09af8a8850dd5:0x61aa4f8d5b37ea7a!8m2!3d29.2360774!4d79.5224048">Shyamlata Kunj, Bithoria No. 1, Haldwani, UK, India</a>
          </span>
        </div>
        <div className = "internal-details2">
            <span className = "phone">
            <CallIcon color="primary" style = {{"fontSize":"13px"}} />
            <a href ="#phone">9971317155</a>
            </span>
            <span className = "linkedIn">
            <LinkedInIcon color = "primary" style ={{"fontSize":"15px"}} />
            <a href = "https://www.linkedin.com/in/kunal-pant-328577132/">kunal-pant-328577132/</a>
            </span>
            <span className = "github">
                <GitHubIcon color ="primary" style = {{"fontSize":"13px"}} />
                <a href = "https://github.com/pantkunalkp">pantkunalkp</a>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
