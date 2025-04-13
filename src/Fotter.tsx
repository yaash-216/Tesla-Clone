import React from "react";

function Fotter(): React.ReactElement {
  return (
    <>
      <footer className="h-40 pb-10 pt-4 flex justify-center">
        <div className="flex flex-col justify-around">
          <p className="text-[#5c5e62] font md:text-[0.5rem] text-[0.4rem] text-center">
            Before the Federal Tax Credit, Model Y Long Range AWD starts at
            $50,630. Price includes Destination and <br />
            Order Fees but exclude taxes and other fees. Subject to change.
            Vehicle shown has upgrades that will <br /> increase the price. The
            $7,500 Federal Tax Credit is available to eligible buyers and
            subject to MSRP caps. <br /> Not all vehicles, customers or finance
            options will be eligible.
            <a
              href=""
              className="underline hover:text-[#171a20] hover:decoration-1 underline-offset-3"
            >
              Terms apply
            </a>
            .
          </p>
          <ul className="flex gap-4 text-[#5c5e62] md:text-[0.5rem] text-[0.4rem] font-bold">
            <li>
              <a href="">Tesla © 2025</a>
            </li>
            <li>
              <a href="">Privacy & Legal</a>
            </li>
            <li>
              <a href="">Vehicle Recalls</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Get Updates</a>
            </li>
            <li>
              <a href="">Locations</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Fotter;
