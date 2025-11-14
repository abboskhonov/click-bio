"use client";
import CustomizeSection from "@/components/customize";
import FaqSection from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FaqSection />
      <Footer />  
      
    </>
  );
};

export default page;
