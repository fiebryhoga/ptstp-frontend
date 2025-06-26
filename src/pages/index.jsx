import Image from "next/image";

import Layout from "./layout";

import HeroSection from "@/components/beranda/HeroSection";
import AboutUsSection from "@/components/beranda/AboutUsSection";
import ServicesSection from "@/components/beranda/ServicesSection";
import WhyChooseUsSection from "@/components/beranda/WhyChooseUsSection";
import ContactSection from "@/components/beranda/ContactSection";



export default function Home() {
  return (
    
      <Layout>

        <HeroSection/>
        <AboutUsSection/>
        <ServicesSection/>
        <WhyChooseUsSection/>
        {/* <ContactSection/> */}
        
      </Layout>
      
      
  );
}
