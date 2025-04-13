import React from "react";
import List from "../components/List";
function Tab4(): React.ReactElement {
  const data_1: string[] = [
    "Demo Drive",
    "Insurance",
    "Military Purchase Program",
    "Learn",
    "Video Guides",
    "Customer Stories",
    "Events",
  ];
  const data_2: string[] = [
    "Find Us",
    "Find a Collision Center",
    "Find a Certified Installer",
  ];
  const data_3: string[] = ["About", "Careers", "Investor Relations"];

  return (
    <>
      <div className="flex p-12 justify-center">
        <List title="Resources" li={data_1} />
        <List title="Location Services" li={data_2} />
        <List title="Company" li={data_3} />
      </div>
    </>
  );
}

export default Tab4;
