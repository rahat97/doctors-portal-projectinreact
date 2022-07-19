import React from "react";
import reviews1 from "../../assets/images/reviews1.png";
import reviews2 from "../../assets/images/reviews2.png";
import reviews3 from "../../assets/images/reviews3.png";

const Reviews = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold text-blue-500">Review your doctor on Healthgrades.</h1>

            <h3 className="my-10 text-xl font-bold">Why We Should Be Thanking our Healthcare Workers</h3>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={reviews1} alt="" />
                <p>In the United States, the healthcare system employs more than 18 million people. These doctors, nurses, and first responders are on the front lines in the fight against disease, injury, disability, and death. They touch countless lives throughout their careers and are there for some of the best—and worst—moments of our lives.</p>
            </div>


            <h3 className="my-10 text-xl font-bold">Tips for Leaving a Great Doctor Review</h3>

            <div className="hero-content flex-col lg:flex-row">
                <img src={reviews2} alt="" />
                <p>From restaurants to hotels to online purchases, people are increasingly turning to review websites to guide their decision-making. Doctor ratings and reviews are no exception. In fact, according to a recent survey, 70% of patients rely on online reviews, like those on Healthgrades.com, to help them select a healthcare provider.</p>
            </div>


            <h3 className="my-10 text-xl font-bold">Why You Can Trust Healthgrades Reviews</h3>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={reviews3} alt="" />
                <p>Along with comprehensive data about a doctor's qualifications, it's important to know what real patients say about their experiences with a provider. That's why Healthgrades takes a series of steps to protect the quality and integrity of our patient reviews.</p>
            </div>


        </div>
    );
};

export default Reviews;