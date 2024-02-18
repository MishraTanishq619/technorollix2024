import Registration from "@/components/Registration";
import React from "react";

function page() {
  return (
    <div className="">
      <div className=" bg-cover bg-center flex">
        <img src="/mainbg.jpg" className="relative" />

        <Registration />
      </div>
    </div>
  );
}

export default page;
