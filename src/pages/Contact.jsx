import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='w-full mt-10 flex flex-col items-center justify-center'>
            <div data-aos="fade-up" data-aos-duration="2000" className='w-[400px] h-[100px] border-solid border-4 border-black flex justify-center items-center font-bold text-[30px] cursor-pointer'><Link to={'/contact'}>CONTACT</Link></div>
            <div data-aos="fade-up" data-aos-duration="2000" className='w-[760px] h-[47px]  font-medium text-[18px] text-center mt-8'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel
                sem varius finibus. Sed ornare sit amet lorem sed viverra.
                In vel urna quis libero viverra facilisis ut ac est.
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className='font-extrabold text-[30px] mt-8'>
                _____ \\\/// _____
            </div>
            <div className="inputs w-[500px] h-[500px] flex flex-col justify-around">
                <input data-aos="fade-up" data-aos-duration="2000" className='border-black border-l-4 border-b-4 w-[500px] h-[50px] pl-5 text-[15px] font-semibold' type="text" placeholder='ENTER YOUR NAME*' />
                <input data-aos="fade-up" data-aos-duration="2000"className='border-black border-l-4 border-b-4 w-[500px] h-[50px] pl-5 text-[15px] font-semibold' type="email" placeholder='ENTER YOUR EMAIL*' />
                <input data-aos="fade-up" data-aos-duration="2000"className='border-black border-l-4 border-b-4 w-[500px] h-[50px] pl-5 text-[15px] font-semibold' type="tel" placeholder='PHONE NUMBER'/>
                <input data-aos="fade-up" data-aos-duration="2000"className='border-black border-l-4 border-b-4 w-[500px] h-[120px] pl-5 text-[15px] font-semibold' type="text" placeholder='YOUR MESSAGE*'/>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className='mb-5 w-[250px] h-[70px] font-bold text-[30px] border-l-4 border-r-4 border-black flex justify-center items-center cursor-pointer hover:border-b-4 hover:border-t-4'>SUBMIT</div>
        </div>
    );
}

export default Contact;
