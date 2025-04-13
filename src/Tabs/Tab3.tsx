import Image_ from "../components/Image_";
import Charging from "../assets/Mega-Menu-Charging-Charging.avif";
import Home_charging from "../assets/Mega-Menu-Charging-Home-Charging.avif";
import Super_charging from "../assets/Mega-Menu-Charging-Supercharging-NA.avif";
import React from "react";

function Tab3(): React.ReactElement {
  return (
    <>
      <div className="flex p-12 justify-center gap-4">
        <div className="grid gap-4 grid-cols-4 ">
          <Image_ url={Charging} name="Charging" fl="Learn" sl="Order" />
          <Image_
            url={Home_charging}
            name="Home charging"
            fl="Learn"
            sl="Order"
          />
          <Image_
            url={Super_charging}
            name="Super charging"
            fl="Learn"
            sl="Order"
          />
        </div>
        <div className="w-[0.1rem] bg-[#e2e3e3]"></div>
        <div>
          <ul className="text-[#171a20] font text-[0.6rem] font-medium flex flex-col gap-2">
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Help Me Charge
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Charging Calculator
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Charging With NACS
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Supercharger Voting
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Host a Supercharger
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Commercial Charging
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Commercial
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Host Wall Connectors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tab3;
