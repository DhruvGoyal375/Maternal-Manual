import React from 'react'
import "./MainPageContent.css"
import Fetus from "/Group 1.png"

function MainPage() {
  return (
    <div>
        <img className="mainpage--fetus" src={Fetus}/>
        <div className="mainpage--welcome">Welcome!</div>
        <div className="mainpage--content">
Pregnancy can be a stressful time for many women. During pregnancy, women tend to experience a variety of physical and emotional changes, including fatigue and mood swings. This website aims to help you navigate through those changes and provide you with information that will help with the best overall development of both you and the baby, during these critical nine months.
        </div>
    </div>
  )
}

export default MainPage