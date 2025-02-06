"use client";
import "./services.modules.scss";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const servicesData = [
    {
      id: 1,
      title: "Best nutrition for children",
      img: "/nutrition-children.png",
    },
    {
      id: 2,
      title: "Best nutrition for heart patients",
      img: "/heart-patients.png",
    },
    {
      id: 3,
      title: "Best nutrition for weight loss",
      img: "/loss-wight.png",
    },
    {
      id: 4,
      title: "Best nutrition for diabetics",
      img: "/nutrition-diabetics.png",
    },
  ];

  return (
    <section className="Services" id="services">
      <h2 data-aos="fade-up">Our Services</h2>

      <div className="Services-container">
        {servicesData.map((service, index) => (
          <div
            className={`services-card${service.id}`}
            key={service.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <figure>
              <Image
                src={service.img}
                alt={`Image illustrating ${service.title}`}
                width={200}
                height={250}
                loading="lazy"
              />
            </figure>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
