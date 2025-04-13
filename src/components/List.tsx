import React from "react";

interface interfacelist {
  title: string;
  li: string[];
}

function List(props: interfacelist): React.ReactElement {
  return (
    <>
      <div className="flex flex-col gap-2 mx-12">
        <h3 className="text-[#5c5e62] font-medium text-[0.6rem] font text-xs">
          {props.title}
        </h3>
        <ul className="flex flex-col gap-2 ml-2">
          {props.li.map((e, index) => (
            <li
              key={index}
              className="text-[#171a20] font-medium text-[0.6rem] font text-xs hover:underline underline-offset-1 decoration-1 cursor-pointer"
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
