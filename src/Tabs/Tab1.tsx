import Image_ from "../components/Image_";
import model_s from "../assets/Mega-Menu-Vehicles-Model-S.png";
import model_3 from "../assets/Mega-Menu-Vehicles-Model-Y-2-v2.png";
import model_Y from "../assets/Mega-Menu-Vehicles-Model-Y-2-v2.png";
import model_X from "../assets/Mega-Menu-Vehicles-Model-X.png";
import Cybertruck from "../assets/Mega-Menu-Vehicles-Cybertruck-1x.png";
import Inventory from "../assets/Mega-Menu-Vehicles-Inventory.png";
import React from "react";
function Tab1(): React.ReactElement {
  return (
    <>
      <div className="flex p-12 justify-center gap-4">
        <div className="grid gap-4 grid-cols-4 ">
          <Image_ url={model_s} name="Model S" fl="Learn" sl="Order" />
          <Image_ url={model_3} name="Model 3" fl="Learn" sl="Order" />
          <Image_ url={model_Y} name="Model Y" fl="Learn" sl="Order" />
          <Image_ url={model_X} name="Model X" fl="Learn" sl="Order" />
          <Image_ url={Cybertruck} name="CyberTruck" fl="Learn" sl="Order" />
          <Image_ url={Inventory} name="Inventory" fl="New" sl="Used" />
        </div>
        <div className="w-[0.1rem] bg-[#e2e3e3]"></div>
        <div>
          <ul className="text-[#171a20] font text-[0.6rem] font-medium flex flex-col gap-2">
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Help Me Choose
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Demo Drive
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Trade-in
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Compare
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
                Fleet
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Semi
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Roadster
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                Federal Tax Credit
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#393c41] hover:underline underline-offset-1 decoration-1"
              >
                We, Robot
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tab1;
