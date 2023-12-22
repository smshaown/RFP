import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import img4 from "../../Image/tabsImg/tab4.png";
import img1 from "../../Image/tabsImg/tabs1.webp";
import img2 from "../../Image/tabsImg/tabs2.webp";
import img3 from "../../Image/tabsImg/tabs3.webp";
import BackgroundShape from "../common/BackgroundShape";

const CustomSliderTab = () => {
  const tabs = ["tab1", "tab2", "tab3", "tab4"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = tabs.indexOf(activeTab);
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
    }, 10000); // Change tab every 5 seconds

    return () => clearInterval(intervalId);
  }, [activeTab, tabs]);

  // Function to get image source based on the active tab
  const getImageSource = (tab) => {
    switch (tab) {
      case "tab1":
        return img1;
      case "tab2":
        return img2;
      case "tab3":
        return img3;
      case "tab4":
        return img4;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <BackgroundShape />
      <div className="container py-16">
        <div className="flex md:flex-row flex-col gap-4">
          {/* Left side  */}
          <div className="md:w-1/2 w-full">
            <div>
              <Image
                src={getImageSource(activeTab)}
                alt={`Image for ${activeTab}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* right side  */}
          <div className="md:w-1/2 w-full">
            <h2 className="font-extrabold text-[42px] heading-color leading-[52px]">
              Solve your biggest response challenges
            </h2>
            <div className="tab-container mt-[40px]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? "active" : ""}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab === "tab1"
                    ? "RFPs"
                    : tab === "tab2"
                    ? "DDQs"
                    : tab === "tab3"
                    ? "RFIs"
                    : "Security questionnaires"}
                </button>
              ))}

              <div className="mt-4">
                {tabs.map((tab) => (
                  <div
                    key={tab}
                    id={`content${tab.slice(-1)}`}
                    className={`tab-content ${
                      activeTab === tab ? "" : "hidden"
                    }`}
                  >
                    {/* Content for tab {tab.slice(-1)} */}
                    {tab === "tab1" && (
                      <div>
                        <p className="text-[16px] font-light leading-[26px]">
                          Removing obstacles is why we built the most
                          comprehensive yet user-friendly RFP software solution
                          available. If you’re struggling to manage RFPs, we
                          have the answer.
                        </p>
                        <div className="mt-[10px] tabs-text-color relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#00699b] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                          {" "}
                          <a
                            className="text-[16px] font-bold flex flex-row gap-2 items-center"
                            href="#"
                          >
                            Discover our RFP software solution
                            <FaArrowRight className="ml-1" />
                          </a>
                        </div>
                      </div>
                    )}
                    {tab === "tab2" && (
                      <div>
                        <p className="text-[16px] font-light leading-[26px]">
                          With our DDQ software solution, you can accelerate
                          deals and transactions, mitigate risk, increase
                          efficiency, collaborate with subject matter experts
                          and much more.{" "}
                        </p>
                        <div className="mt-[10px] tabs-text-color relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#00699b] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                          {" "}
                          <a
                            className="text-[16px] font-bold flex flex-row gap-2 items-center"
                            href="#"
                          >
                            Discover our DDQ software solution
                            <FaArrowRight className="ml-1" />
                          </a>
                        </div>
                      </div>
                    )}
                    {tab === "tab3" && (
                      <>
                        <p className="text-[16px] font-light leading-[26px]">
                          Never miss a great opportunity to win business by
                          automating your approach to RFIs. Our leading RFI
                          software solution helps you stand out so you can
                          advance deals.
                        </p>
                        <div className="mt-[10px] tabs-text-color relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#00699b] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                          {" "}
                          <a
                            className="text-[16px] font-bold flex flex-row gap-2 items-center"
                            href="#"
                          >
                            Discover our RFI software solution
                            <FaArrowRight className="ml-1" />
                          </a>
                        </div>
                      </>
                    )}
                    {tab === "tab4" && (
                      <>
                        <p className="text-[16px] font-light leading-[26px]">
                          Removing obstacles is why we built the most
                          comprehensive yet user-friendly RFP software solution
                          available. If you’re struggling to manage RFPs, we
                          have the answer.{" "}
                        </p>
                        <div className="mt-[10px] tabs-text-color relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#00699b] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                          {" "}
                          <a
                            className="text-[16px] font-bold flex flex-row gap-2 items-center"
                            href="#"
                          >
                            Discover our security questionnaire software
                            solution
                            <FaArrowRight className="ml-1" />
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CustomSliderTab;
