import React from 'react'
import './newIndex.css'
const Trimester1 = () => {

    return (
        <>
        <div className='outer-container'>
            <div className='trimester-info'>
                <h1 className='info-head'>Trimester I</h1>
                <p className='info-para'>The first trimester of pregnancy spans from week 1 to week 12. During this time, the fertilized egg implants in the uterus and begins to grow into an embryo. The embryo's organs, nervous system, and body structures begin to form rapidly. The mother may experience symptoms such as fatigue, nausea, and breast tenderness as her body adjusts to the pregnancy. Prenatal care is essential during the first trimester, and the mother may undergo various tests, such as blood tests and ultrasounds, to monitor the development of the embryo and detect any potential issues. It's important for the mother to maintain a healthy lifestyle, including eating a balanced diet, staying active, and avoiding harmful substances such as alcohol and tobacco.</p>
            </div>
        </div>

        <div className='do-dont-container'>
            <div className='do-container'>
                <h1 className='head'>Do's</h1>
                <li className='text'>Limit stress</li>
                <li className='text'>Gets lots of sleep</li>
                <li className='text'>Eat healthy</li>
                <li className='text'>Communicate with your partner about parenting and budgeting</li>
                <li className='text'>Schedule regular checkups with the doctor, <br></br>keep the contact handy</li>
                <li className='text'>Focus on folate</li>
                <li className='text'>Eat the rainbow (colorful foods)</li>
                <li className='text'>Take prenatal vitamins</li>
                <li className='text'>Exercise</li>
                <li className='text'>Get a flu shot</li>
                <li className='text'>Ensure your medication are safe</li>
            </div>
            <div className='dont-container'>
                <h1 className='head'>Don'ts</h1>
                <li className='text'>Consume alcohol</li>
                <li className='text'>Smoke or use drugs</li>
                <li className='text'>Consume excessive caffeine</li>
                <li className='text'>Attempt losing weight</li>
                <li className='text'>Attempt dieting</li>
                <li className='text'>Getting piercings or tattoos</li>
                <li className='text'>Attempt cleaning a cat's litter box</li>
                <li className='text'>Play contact sports and engage in rough activities</li>
                <li className='text'>Use saunas or soak in hot tubs</li>
            </div>
        </div>
        </>
    )
}

export default Trimester1
