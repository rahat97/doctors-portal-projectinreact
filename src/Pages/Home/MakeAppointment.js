import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
         class='flex justify-center items-center'>
            <div  class='flex-1 hidden lg:block'>
                <img  class='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div  class='flex-1 px-5'>
                <h3  class='text-xl text-primary font-bold'>Appointment</h3>
                <h2  class='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p  class='text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;