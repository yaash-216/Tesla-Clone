import tesla from "./assets/e3a80203-154a-41df-b747-cbb6b9321fea.svg";
import help from "./assets/ca42d297-28a3-4bc9-b257-36fee76e7d63.svg";
import internet from "./assets/3adb1f8d-58c4-4cea-8c3b-ea92f429d2c6.svg";
import account from "./assets/0db04f70-4400-43b1-84d1-81694abec66b.svg";
import React, { useState } from "react";
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";
import Tab3 from "./Tabs/Tab3";
import Tab4 from "./Tabs/Tab4";
import Tab5 from "./Tabs/Tab5";

function Navbar1(): React.ReactElement {
  const [tabname, settabname] = useState<string>("");
  const [ishover, setishover] = useState<boolean>(false);
  return (
    <>
      <header className={ishover ? "bg-white" : ""}>
        <nav className="flex  items-center justify-between px-4 py-2">
          <a href="/">
            <span>
              <img src={tesla} alt="" className="" width={70} />
            </span>
          </a>
          <ul
            className={
              ishover
                ? "flex text-[0.6rem]  text-[#171a20]  font gap-2 items-center"
                : "flex text-[0.6rem]  text-white  font gap-2 items-center"
            }
          >
            <li
              onMouseOver={() => {
                setishover(true), settabname("Tab1");
              }}
              className="hover:bg-[#0000000d]  hover:cursor-pointer px-2 py-1"
            >
              Vehicles
            </li>
            <li
              onMouseOver={() => {
                setishover(true), settabname("Tab2");
              }}
              className="hover:bg-[#0000000d]  hover:cursor-pointer px-2 py-1"
            >
              Energy
            </li>
            <li
              onMouseOver={() => {
                setishover(true), settabname("Tab3");
              }}
              className="hover:bg-[#0000000d]  hover:cursor-pointer px-2 py-1"
            >
              Charging
            </li>
            <li
              onMouseOver={() => {
                setishover(true), settabname("Tab4");
              }}
              className="hover:bg-[#0000000d]  hover:cursor-pointer px-2 py-1"
            >
              Discover
            </li>
            <li
              onMouseOver={() => {
                setishover(true), settabname("Tab5");
              }}
              className="hover:bg-[#0000000d]  hover:cursor-pointer px-2 py-1"
            >
              Shop
            </li>
          </ul>
          <span className="flex gap-2">
            <a href="">
              <img src={help} alt="" width={20} />
            </a>
            <a href="">
              <img src={internet} alt="" width={20} />
            </a>
            <a href="">
              <img src={account} alt="" width={20} />
            </a>
          </span>
        </nav>
        {tabname && (
          <div className="absolute bg-white  w-full">
            {tabname == "Tab1" && <Tab1 />}
            {tabname == "Tab2" && <Tab2 />}
            {tabname == "Tab3" && <Tab3 />}
            {tabname == "Tab4" && <Tab4 />}
            {tabname == "Tab5" && <Tab5 />}
            <div
              onMouseOver={() => {
                setishover(false);
                settabname("");
              }}
              className="h-96 w-full backdrop-blur-sm absolute"
            ></div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar1;
