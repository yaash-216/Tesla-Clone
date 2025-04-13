//import { useContext } from 'react'
import React, { useEffect, useState } from "react";
import Page from "./components/Page";
import Fotter from "./Fotter";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";

function Home(): React.ReactElement {
  const [width, setwidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  return (
    <>
      <div className="bg-[url(./assets/home_1.jpeg)] bg-cover bg-center h-screen">
        {width > 768 ? <Navbar1 /> : <Navbar2 />}
        <div className="flex justify-center my-3">
          <div className="flex flex-col">
            <h1 className="text-white text-center text-4xl font font-medium ">
              Model Y
            </h1>
            <p className="text-center font text-sm text-white font-medium">
              Starting at $41,4901 <br /> After $7,500 Federal Tax Credit
            </p>
            <span className="flex gap-2 my-3">
              <a
                href=""
                className="bg-[#3e6ae1] hover:bg-[#3457b1] text-white text-[0.6rem] font px-12 py-1.5 rounded-xs"
              >
                Order Now
              </a>
              <a
                href=""
                className="bg-[#f4f4f4] hover:bg-[#eee] text-[#393c41] text-[0.6rem] font px-12 py-1.5 rounded-xs"
              >
                Learn More
              </a>
            </span>
          </div>
        </div>
      </div>
      <Page
        url=" bg-[url(./assets/home_2.jpeg)]"
        title="Model 3"
        description="$299/mo Leasing With $1,000 Down"
      />
      <Page
        url=" bg-[url(./assets/home_3.avif)]"
        title="Cyber Punk"
        description="After $7,500 Federal Tax Credit"
      />
      <Page
        url=" bg-[url(./assets/home_4.jpeg)]"
        title="Model X"
        description="Free Supercharging Included"
      />
      <Page
        url=" bg-[url(./assets/home_5.jpeg)]"
        title="Model S"
        description="Free Supercharging Included"
      />
      <Page
        url=" bg-[url(./assets/home_6.jpeg)]"
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
      />
      <Page
        url=" bg-[url(./assets/home_7.jpeg)]"
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
      />
      <Page
        url=" bg-[url(./assets/home_8.jpeg)]"
        title="Power Wall"
        description=""
      />
      <Page
        url=" bg-[url(./assets/home_9.jpeg)]"
        title="Accessories"
        description=""
      />
      <Fotter />
    </>
  );
}

export default Home;
