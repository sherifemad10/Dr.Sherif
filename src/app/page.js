"use client";

import dynamic from "next/dynamic";
import { useContext, useMemo } from "react";
import { ThemeContext } from "@/component/context/context";
import Main from "@/component/main/Main";
import Quote from "@/component/quote/Quote";
import Services from "@/component/services/Services";
import About from "@/component/about/About";
import Ads from "@/component/Ads/Ads";


const Bmi = dynamic(() => import("@/component/Bmi/Bmi"), { ssr: false });
const Bmr = dynamic(() => import("@/component/Bmr/Bmr"), { ssr: false });
const Contact = dynamic(() => import("@/component/contact/Contact"), {
  ssr: false,
});

export default function Home() {
  const { theme } = useContext(ThemeContext);

  // Memoized class name to avoid unnecessary recalculations
  const homeClassName = useMemo(() => `Home ${theme}`, [theme]);

  // Static quotes to prevent unnecessary re-renders
  const quotes = [
    "We are dedicated to improving the quality of people's nutrition",
    "Make sure your daily nutrition is sufficient. Consult your problem about nutrition with us.",
  ];

  return (
    <div className={homeClassName}>
      <Main />
      <div className="line-break"></div>
      <Services />
       <Ads/>
      <div className="line-break"></div>
      <About />
      <Quote Quote={quotes[0]} />
      <Bmi />
      <Quote Quote={quotes[1]} />
      <Bmr />
      <div className="line-break"></div>
      <Contact />
    </div>
  );
}
