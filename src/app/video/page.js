// "use client"
// import { ThemeContext } from '@/component/context/context';
// import './video.modules.scss'
// import { IoClose } from "react-icons/io5";
// import { useContext } from 'react';
// import Link from 'next/link';


// const Video = () => {
//     const {videoHandler} = useContext(ThemeContext)
  
//   return (
//     <div className='Video'>

// <div className='Video-container'>
//   <Link href='/'>
//      <IoClose onClick={videoHandler} className='close-icon'/>
//      </Link>
//       <video autoPlay loop={true}>
//         <source src='/Nutrition-Clinic.mp4' type='video/mp4' />
//       </video>
//       </div>

//     </div>
//   )
// }

// export default Video

"use client";
import { ThemeContext } from "@/component/context/context";
import "./video.modules.scss";
import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

const Video = () => {
  const { videoHandler } = useContext(ThemeContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure the video loads as soon as the component mounts
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null; // Prevents hydration issues in Next.js

  return (
    <div className="Video">
      <div className="Video-container">
        <Link href="/">
          <IoClose onClick={videoHandler} className="close-icon" />
        </Link>
        <video autoPlay loop muted playsInline>
          <source src="/Nutrition-Clinic.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
