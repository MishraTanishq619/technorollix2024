import React from "react";
import Home from "@/components/Home";

const page = () => {
  return (
    <div className="">
      <div className=" bg-cover bg-center flex">
        <img src="/mainbg.jpg" className="relative" />

        <Home />
      </div>
    </div>
  );
};

export default page;
