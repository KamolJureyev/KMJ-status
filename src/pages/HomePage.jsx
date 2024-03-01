import React from 'react';
import rec from '../images/Rectangle.png'
import '../styles/home.css'
import { MdEmail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import AboutMe from './AboutMe';
import Skills from './Skills';
import Contact from './Contact';

const HomePage = () => {
    return (
        <div>
            <div className='w-full h-[700px] flex flex-row items-center justify-between bg-gray-300'>
                <div className="home_left flex flex-col justify-between items-start pl-7 ">
                    <p data-aos="fade-up"data-aos-duration="2000" className='font-bold text-[40px] text-center'>Hi , I am</p>
                    <span data-aos="fade-up"data-aos-duration="2000" className='font-bold text-[80px] text-center'>Kamol Juraev</span>
                    <span data-aos="fade-up"data-aos-duration="2000" className='font-semibold text-[25px] text-center text-gray-500'>Front-end Developer / React</span>
                    <div data-aos="fade-up"data-aos-duration="2000" className='w-[100px] flex justify-between items-center text-[30px] pt-10'>
                        <MdEmail />
                        <AiFillGithub />
                        <AiFillLinkedin />
                    </div>
                </div>
                <div className="home_right w-[800px] h-full">
                    <img src={rec} alt="ghjb" />
                </div>
            </div>
            <div className='w-full h-[310px] back flex flex-col justify-around items-start p-5'>
                <span data-aos="fade-right" className='font-bold text-[30px] text-white'>IT BERRIES</span>
                <p data-aos="fade-right" className='font-normal text-[18px] text-white'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat,
                    suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
            </div>
            <AboutMe/>
            <Skills/>
            <Contact/>
        </div>
    );
}

export default HomePage;
