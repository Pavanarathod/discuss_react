import React from "react";
import Email from "../components/Email";
import Gmail from "../components/Gmail";

const Loginpage = () => {
  return (
    <div className="w-full grid sm:grid-cols-2 sm:gap-x-20	  items-center">
      <div>
        <Email />
      </div>
      <div>
        <Gmail />
      </div>
    </div>
  );
};

export default Loginpage;
