import Image_ from "../components/Image_";
import Charging from "../assets/Mega-Menu-Charging-Home-Charging.avif";
import Vechicle_Accessories from "../assets/Mega-Menu-Shop-Vehicle-Accessories.avif";
import Apparel from "../assets/Mega-Menu-Shop-Apparel.avif";
import Lifestyle from "../assets/Mega-Menu-Shop-Lifestyle.avif";
import React from "react";

function Tab5(): React.ReactElement {
  return (
    <>
      <div className="flex p-12 justify-center">
        <Image_ url={Charging} name="Charging" />
        <Image_ url={Vechicle_Accessories} name="Vechicle Accessories" />
        <Image_ url={Apparel} name="Apparel" />
        <Image_ url={Lifestyle} name="Lifestyle" />
      </div>
    </>
  );
}

export default Tab5;
