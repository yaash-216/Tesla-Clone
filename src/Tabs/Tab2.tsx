import Image_ from "../components/Image_";
import Solar_panel from "../assets/Mega-Menu-Energy-Solar-Panels.avif";
import Solar_roof from "../assets/Mega-Menu-Energy-Solar-Roof.avif";
import Power_wall from "../assets/Mega-Menu-Energy-Powerwall-US.avif";
import Mega_Pack from "../assets/Mega-Menu-Energy-Megapack.png";
import React from "react";

function Tab2(): React.ReactElement {
  return (
    <>
      <div className="flex p-12 justify-center gap-4">
        <div className="grid gap-4 grid-cols-4 ">
          <Image_ url={Solar_panel} name="Solar Panels" fl="Learn" sl="Order" />
          <Image_ url={Solar_roof} name="Solar Roof" fl="Learn" sl="Order" />
          <Image_ url={Power_wall} name="Power Wall" fl="Learn" sl="Order" />
          <Image_ url={Mega_Pack} name="Mega Pack" fl="Learn" sl="Order" />
        </div>
        <div className="w-[0.1rem] bg-[#e2e3e3]"></div>
        <div>
          <ul className="text-[#171a20] font text-[0.6rem] font-medium flex flex-col gap-2">
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Schedule a Consultation
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Why Solar
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Incentives
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Support
              </a>
            </li>
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
                Partner with Tesla
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
                Utilities
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tab2;
