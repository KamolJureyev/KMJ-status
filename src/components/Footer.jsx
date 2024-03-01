import React from 'react';
import {Link} from 'react-router-dom'
import { AiOutlineDownCircle } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'


const Footer = () => {
    return (
        <div>
            <div  data-aos-anchor-placement="top-bottom" className='w-full h-[320px] flex flex-col justify-around items-center text-[15px] text-white font-bold bg-black'>
                <div data-aos="fade-up" className='flex flex-col items-center'>
                    <Link to={'/'}><AiOutlineDownCircle /></Link>
                    BACK TO TOP
                </div>
                <div data-aos="fade-up" className='w-[130px] flex flex-row text-[50px] justify-between items-center'>
                    <AiOutlineFacebook />
                    <AiFillLinkedin />
                    <AiFillInstagram />
                    <MdEmail />
                </div>
                <div  className='text-white'>
                    @2020 Kamol Juraev All Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
