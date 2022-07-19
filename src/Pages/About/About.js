import React from "react";
import bgAbout from "../../assets/images/bg-about.jpg";

const About = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold text-blue-700">About us</h1>

            <h3 className="text-xl my-5 text-green-500">World-class Care</h3>

            <p>We work to protect patient safety and improve medical education and practice across the World. See the different ways we do this, learn how we set and deliver our aims, and meet the people behind our work.</p>

            <p className="my-3">Founded in 1980, Bumrungrad International Hospital has been a global pioneer in providing world-class healthcare services and international patient support for nearly four decades. Located in the heart of Bangkok, Thailand, a cosmopolitan megacity nicknamed “The City of Angels” and renowned for its culture of exceptional hospitality and delicious cuisine. Bumrungrad is an internationally accredited, multi-specialty hospital listed on the Stock Exchange of Thailand since 1989. One of the largest private hospitals in Southeast Asia, Bumrungrad International Hospital cares for over 1.1 million patients from more than 190 countries annually.</p>

            <img src={bgAbout} alt="about-background" className="" />

            <h3 className="text-xl my-5 text-green-500">Milestones</h3>

            <h4>	◙ Global Healthcare Accreditation with Excellence: September 2017</h4>
            <h4>	◙ Opened 200 bed facility: September 17, 1980</h4>
            <h4>	◙ Joint Commission International accreditation: Since February 2002</h4>
            
        </div>
    );
};

export default About;