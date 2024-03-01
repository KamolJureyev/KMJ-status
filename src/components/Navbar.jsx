import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='w-full h-[70px] bg-black flex flex-row justify-between items-center'>
                <div className='h-[50px] w-[80px] rounded-l-lg rounded-r-lg ml-10 flex items-center justify-center shadow hover:shadow-lg hover:shadow-white'>
                    <Link to={'/'}><p className='text-white flex items-start  text-[25px] font-bold '>KMP</p></Link>
                </div>
                <ul className='text-white pr-8 flex flex-row justify-between items-center w-[400px] font-semibold ease-in text-[17px] '>
                    <Link to={'/aboutme'}><li className='hover:border-white hover:border-b-2'>About me</li></Link>
                    <Link to={'/skills'}><li className='hover:border-white hover:border-b-2'>Skills</li></Link>
                    <Link to={'/'}><li className='hover:border-white hover:border-b-2'>Portfolio</li></Link>
                    <li className='h-[40px] w-[110px] bg-white rounded-[30px] text-black flex justify-center items-center border-white border-2 hover:bg-black hover:text-white hover:ease-in hover:duration-300'><Link to={"/contact"}>Contact me</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
