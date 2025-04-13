import React, { useState } from "react";
import tesla from "./assets/e3a80203-154a-41df-b747-cbb6b9321fea.svg";

interface interface_data_ {
  title: string;
  flag: boolean;
}

function Navbar2(): React.ReactElement {
  const [isshow, setshow] = useState<boolean>(false);
  const _data_: interface_data_[] = [
    { title: "Vehicle", flag: true },
    { title: "Energy", flag: true },
    { title: "Charging", flag: true },
    { title: "Discover", flag: true },
    { title: "Shop", flag: false },
    { title: "Support", flag: false },
  ];
  return (
    <>
      <header>
        {!isshow && (
          <nav className="flex  items-center justify-between px-4 py-2">
            <a href="/">
              <span>
                <img src={tesla} alt="" className="" width={70} />
              </span>
            </a>
            <button
              className="hover:bg-[#0000000d] text-[0.6rem] text-white  hover:cursor-pointer px-2 py-1"
              onClick={() => setshow(true)}
            >
              Menu
            </button>
          </nav>
        )}
        {isshow && (
          <div className="fixed bg-white   h-screen w-screen px-6">
            <div className="flex justify-end">
              <button
                className="hover:bg-[#0000000d] hover:cursor-pointer p-2"
                onClick={() => setshow(false)}
              >
                <img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/fluency-systems-regular/15/multiply.png"
                  alt="multiply"
                />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {_data_.map((e, index) => (
                <div
                  key={index}
                  className="flex justify-between cursor-pointer hover:bg-[#0000000d] items-center py-2 px-1 rounded-xs"
                >
                  <h3 className="text-black font text-xs font-medium px-3">
                    {e.title}
                  </h3>
                  {e.flag && (
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/material-sharp/20/forward.png"
                      alt="forward"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar2;
