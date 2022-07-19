import React from 'react';
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from '../Shared/PrimaryButton';

const Banner2 = () => {
    return (
        <div  className="hero min-h-screen">
  <div  className="hero-content flex-col lg:flex-row">
    <img src={treatment} alt="chair-img"  className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1  className="text-5xl font-bold"> Exceptional Dental Care, on Your Terms </h1>
      <p  className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner2;
