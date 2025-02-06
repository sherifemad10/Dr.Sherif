"use client";
import { useEffect, useMemo, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./main.scss";
import Image from "next/image";
import { Link } from "react-scroll";
import VideoBtn from "./videoBtn";

const Main = () => {
  const bookNowText = useMemo(() => "BOOK NOW BOOK NOW".split(""), []);
  const mainRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <main className="main" id="main" ref={mainRef} data-aos="fade-up">
      <div
        className="main-text"
        ref={textRef}
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <h2>
          Changing your <span>eating</span> habits
        </h2>
        <p>
          Always take care of your health starting from the food menu that you
          consume every day.
        </p>
        <VideoBtn />
      </div>

      <div
        className="main-img"
        ref={imageRef}
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <figure>
          <Image
            src="/main.jpg"
            alt="Healthy food"
            title="Healthy food"
            width={500}
            height={500}
            priority
          />
        </figure>

        {/* Booking btn */}
        <button
          className="button"
          aria-label="Book Now"
          ref={buttonRef}
          data-aos="zoom-in-up"
          data-aos-delay="700"
        >
          <Link to="contact" aria-label="Go to Contact" smooth={true}>
            <p className="button__text">
              {bookNowText.map((char, index) => (
                <span key={index} style={{ "--index": index }}>
                  {char}
                </span>
              ))}
            </p>
            <div className="button__circle">
              <svg
                width="14"
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
              <svg
                className="button__icon button__icon--copy"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                />
              </svg>
            </div>
          </Link>
        </button>
      </div>
    </main>
  );
};

export default Main;
