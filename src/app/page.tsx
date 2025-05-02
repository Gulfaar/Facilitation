import Image from "next/image";
import Header from "./components/Header/Header";
import HeroSection from "./components/FacilitationManagement/HeroSection";
import ServiceLists from "./components/FacilitationManagement/ServiceLists";
import WhyGulfaar from "./components/FacilitationManagement/WhyGulfaar";
import CustomerCare from "./components/FacilitationManagement/CustomerCare";
import WhereWeWork from "./components/FacilitationManagement/WhereWeWork";
import OurProjects from "./components/FacilitationManagement/OurProjects";
import Footer from "./components/Footer/Footer";
import HeroWorked from "./components/Home/HeroWorked";

export default function Home() {
  return (
    <div>


      <HeroWorked/>
      <HeroSection />
      <ServiceLists />
      <WhyGulfaar />
      
      <WhereWeWork />
      <div className='px-10'>
        <CustomerCare />
      </div>
      <OurProjects />
      <Footer />

    </div>
  );
}
