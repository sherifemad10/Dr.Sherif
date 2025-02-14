"use client"
import { ThemeContext } from '@/component/context/context';
import './video.modules.scss'
import { IoClose } from "react-icons/io5";
import { useContext } from 'react';
import Link from 'next/link';


const Video = () => {
    const {videoHandler} = useContext(ThemeContext)
  
  return (
    <div className='Video'>

<div className='Video-container'>
  <Link href='/'>
     <IoClose onClick={videoHandler} className='close-icon'/>
     </Link>
      <video autoPlay loop={true}>
        <source src='/Nutrition-Clinic.mp4' type='video/mp4' />
      </video>
      </div>

    </div>
  )
}

export default Video


