import React from 'react';
import '../../App.css';
import "./ContactUs.css"
import Dhruv from "../../images/dhruv.jpg"
import Anirudh from "../../images/anirudh2.jpg"
import Ujjawal from "../../images/ujjawal.jpeg"
import Rishabh from "../../images/rishabh.jpeg"

export default function ContactUs() {
  return (
    <>
    <div className='mainBox'>
      <h1 className="main-line">ABOUT US</h1>
    <div className="container">
        <div className="box box1">
            <img className="Circular-img" src={Dhruv}/>
            <h3 >I am Dhruv Goyal currently pursuing Computer Science and Engineering at Punjab
                Engineering College, Chandigarh. I am a member of the Implementation Body of PEC ACM-CSS. Interested in data science 
                and machine learning. Occassionaly try new beatbox patterns.</h3>
        </div>

        <div className="box box2">
            <img className="Circular-img" src={Anirudh} />
            <h3>I am Anirudh Ralhan currently pursuing Electronics and Communications Engineering at Punjab
                Engineering College, Chandigarh. Interested in the field of UI/UX
                development and data analytics, among other things. Avid media consumer
                of all sorts. Sometimes, I sketch.</h3>
        </div>
    </div>

    <div className="container">
        <div className="box box3">
            <img className="Circular-img" src={Ujjawal} />
            <h3>I am Ujjawal Gupta currently pursuing Computer Science and Engineering at Punjab Engineering College
                Chandigarh. I am currently in the Organising Team of GDSC PEC and have experience in the field of Web
                Development. I am interested in building projects which have significant impact on the life of people and
                love solving problems.</h3>
        </div>

        <div className="box box4">
            <img className="Circular-img" src={Rishabh} />
            <h3>I am Rishabh Bhargava currently pursuing Electrical Engineering at Punjab Engineering College, Chandigarh. I am member of
                Implementation Body of PEC ACM-CSS. I am interested in Web-Development and Personal-finance. 
                I love to organise events and I am a content-writer too..</h3>
        </div>
    </div>

        <div className="contact-us">
            <h1>Contact us: maternalmanual@gmail.com </h1>
        </div>
    </div>
    </>
  )
}
