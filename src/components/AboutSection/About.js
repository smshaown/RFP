
import OwlCarouselComponent from "./OwlCarouselComponent";
import RealizeMoreSection from "./RealizeMoreSection";
import ThreeCards from "./ThreeCards";
import WhyCustomers from "./WhyCustomers";
import WinMoreSection from "./WinMoreSection";


const About = () => {
    return (
        <div className="displayBodyColor py-24 my-10">
             <WinMoreSection />
             <WhyCustomers />
             <RealizeMoreSection />
             <ThreeCards />
             <OwlCarouselComponent />
        </div>
    );
};

export default About;