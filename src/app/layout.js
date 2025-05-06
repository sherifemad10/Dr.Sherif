import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";
import { ContextProvider } from "@/component/context/context";
import Footer from "@/component/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr.Sherif",
  description:
    "Dr.Sherif - Your Ultimate Destination for Healthy Eating & Weight Management. We provide expert nutrition plans, personalized diet programs, and weight loss solutions to help you achieve your fitness goals. Whether you want to lose weight, gain muscle, or maintain a balanced lifestyle, our professional guidance ensures sustainable results. Join EatFit today and transform your health with the right nutrition!",
  keywords:
    "Dr.Sherif, Healthy Eating, Weight Management, Nutrition Plans, Personalized Diet Programs, Personalized, loss Weight, Personalized",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5224293873880731"
     crossorigin="anonymous"></script>
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
