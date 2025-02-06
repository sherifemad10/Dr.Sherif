"use client";
import "./quote.modules.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Quote = ({ Quote }) => {
  const quoteRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    imagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="Quote">
      <div className="quote-container">
        <h5 ref={quoteRef}>{Quote}</h5>

        {[
          { src: "/doc.jpg", alt: "Doctor", className: "doc" },
          { src: "/veg.png", alt: "Vegetables", className: "veg" },
          {
            src: "/vegtable.png",
            alt: "Vegetable Basket",
            className: "vegtable",
          },
          {
            src: "/vegtable1.png",
            alt: "Vegetable Basket",
            className: "vegtable1",
          },
          { src: "/sherif.png", alt: "Sherif", className: "sherif" },
        ].map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={100}
            height={100}
            priority
            className={image.className}
            ref={(el) => (imagesRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default Quote;
