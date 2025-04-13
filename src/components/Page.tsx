import React from "react";

interface interface_page {
  url: string;
  title: string;
  description: string;
}

function Page(props: interface_page): React.ReactElement {
  return (
    <>
      <div
        className={
          " bg-cover bg-center h-screen justify-between py-10 flex flex-col" +
          props.url
        }
      >
        <div className="flex justify-center">
          <span className="flex flex-col">
            <h1 className="text-4xl font text-center text-white font-medium">
              {props.title}
            </h1>
            <p className="font text-white text-sm font-medium">
              {props.description}
            </p>
          </span>
        </div>
        <span className="flex gap-2 my-3 justify-center">
          <a
            href=""
            className="bg-[#3e6ae1]  text-white text-[0.6rem] font px-12 py-1.5 rounded-xs"
          >
            Order Now
          </a>
          <a
            href=""
            className="bg-[#f4f4f4] text-[#393c41] text-[0.6rem] font px-12 py-1.5 rounded-xs"
          >
            Learn More
          </a>
        </span>
      </div>
    </>
  );
}

export default Page;
