"use client";
import CustomizeSection from "@/components/customize";
import FaqSection from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Audition from "@/components/audition";
import ContactSection from "@/components/contact";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Audition />
      <ContactSection />
      
      <FaqSection />
      <Footer />  
      
    </>
  );
};

export default page;
