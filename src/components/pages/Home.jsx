import React from 'react';
import '../../App.css';
import Mother from "../../images/Group 3.png"
import Doctor from "../../images/Group 6.png"

export default function Home() {
  return (
    <>
      <div className='home'>

        <div className='motherAndText'>
          <img src={Mother} className='home-img'/>

          <div className='home-text'>
            <h1 className='home-welcome'>WELCOME!</h1>
            <h4 className='home-quote'><i>"Birth takes a woman's deepest fears about herself<br></br>and shows her that she is stronger than them"</i></h4>
            <p className='home-para'>A comprehensive pregnancy guide for expecting mothers</p>
          </div>
        </div>

        <div className='api'>
          <div className='api-text'>
            <h6><i className='api-text-quote'>"Doctors and pharmacies ensure a safe and healthy pregnancy"</i></h6>
            <p className='api-text-find'><b>FIND DOCTORS, HOSPITALS AND PHARMACIES NEAR YOU</b></p>
            <button type="button" className='home-btn'>
              <a href='https://google-api-silk.vercel.app/' >
                <p><b>Find Help Nearby</b></p>
              </a>
            </button>
          </div>
          <img src={Doctor} className='api-img'></img>
        </div>
      </div>
    </>
  );
}
