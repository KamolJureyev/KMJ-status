import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pencil from '../images/pencil.png'
import keys from '../images/keys.png'
import setting from '../images/setting.png'

const AboutMe = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='about_bg w-full h-[1000px] flex flex-col items-center justify-around'>
            <div data-aos="fade-up" className='w-[400px] h-[100px] border-solid border-4 border-black flex justify-center items-center font-bold text-[30px]'>ABOUT ME</div>
            <div data-aos="fade-up" className='w-[760px] h-[47px]  font-medium text-[18px] text-center'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel
                sem varius finibus. Sed ornare sit amet lorem sed viverra.
                In vel urna quis libero viverra facilisis ut ac est.</div>
            <div data-aos="fade-up" className='w-[300px] h-[80px] font-bold text-[30px] border-l-4 border-r-4 border-black flex justify-center items-center'>EXPLORE</div>
            <div data-aos="fade-up" className='font-extrabold text-[30px]'>
                _____ \\\/// _____
            </div>
            <div className='flex flex-row justify-between items-center w-[1200px]'>
                <div data-aos="fade-up-right" className='w-[510px] h-[170px]  relative flex flex-col items-start justify-center'>
                    <img className='w-[80px]' src={pencil} alt="" />
                    <p className='text-[22px] font-bold absolute top-16 left-12'>DESIGN</p>
                    <p className='text-[15px] font-normal absolute top-28 left-12'>I can design the site based on your needs and suggestions.
                        I can also design the site from scratch and consult you during the job.</p>
                </div>
                <div data-aos="fade-up-left" className='w-[510px] h-[170px] relative flex flex-col items-start justify-center'>
                    <img src={keys} alt="" />
                    <p className='text-[22px] font-bold absolute top-16 left-12'>DEVELOPMENT</p>
                    <p className='text-[15px] font-normal absolute top-28 left-12'>I can design the site based on your needs and suggestions. I can also
                        design the site from scratch and consult you during the job.</p>
                </div>
            </div>
            <div data-aos="zoom-in" className='w-[510px] h-[170px] relative flex flex-col items-start justify-center'>
                <img src={setting} alt="" />
                <p className='text-[22px] font-bold absolute top-16 left-12'>MAINTENANCE</p>
                <p className='text-[15px] font-normal absolute top-28 left-12'>I can design the site based on your needs and suggestions. I can also
                    design the site from scratch and consult you during the job.</p>
            </div>
        </div>
    );
}

export default AboutMe;
