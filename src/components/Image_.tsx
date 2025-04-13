import React from "react";

interface image {
  url: string;
  name: string;
  fl?: string;
  sl?: string;
}

function Image_(props: image): React.ReactElement {
  return (
    <>
      <div className="flex flex-col justify-center w-fit ">
        <img src={props.url} alt="" width={140} />
        <h1 className="text-black font text-xs  text-center">{props.name}</h1>
        <span className="flex gap-2 justify-center font">
          <a
            href=""
            className="text-[#5c5e62] text-[0.5rem] font-medium underline hover:text-[#171a20] hover:decoration-1 underline-offset-3"
          >
            {props.fl}
          </a>
          <a
            href=""
            className="underline hover:text-[#171a20] hover:decoration-1 underline-offset-1 text-[#5c5e62] text-[0.5rem] font-medium"
          >
            {props.sl}
          </a>
        </span>
      </div>
    </>
  );
}

export default Image_;
