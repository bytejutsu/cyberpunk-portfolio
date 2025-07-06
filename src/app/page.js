"use client";

import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ChatbotWrapper from "@/components/ChatbotWrapper/ChatbotWrapper";
import TechnologiesSection from "@/components/TechnologiesSection/TechnologiesSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import MatrixSection from "@/components/Terminal/MatrixSection";
import ContactSection from "@/components/Contact/ContactSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import {ToastContainer} from "react-toastify";

export default function Home() {
    return (
      <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow">
              <Hero/>
              <ProjectsSection/>
              <TestimonialsSection/>
              <TechnologiesSection/>
              <AboutSection/>
              <MatrixSection/>
              <div className="">
                  <ContactSection/>
                  {/* Toast notifications */}
                  <ToastContainer />
              </div>
              <Footer/>
          </main>
          <div className="z-51"> {/* z index should be greater than the one of the navbar in order to be able to display the chatbot over the navbar on mobile devices*/}
              <ChatbotWrapper/>
          </div>
      </div>
    );
}
