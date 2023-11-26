import React from "react";
import { FaHouse } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="absolute top-0 flex h-[100px] place-content-center px-24">
        <div className="flex items-center">
          <div>
            <FaHouse className="text-5xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
