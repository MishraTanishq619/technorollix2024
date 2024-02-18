import React from "react";
import InputBox from "./InputBox";

function Registration() {
  return (
    <div className="absolute text-white pl-96">
      <div className="flex items-start ">
        <p className="text-4xl px-3 py-6">REGISTRATION</p>
      </div>
      <div className="border border-gray-3000 m-4 px-4">
        <div
          id="input-holders"
          className="grid grid-cols-2 gap-4 m-4 row-span-4"
        >
          <div id="input-holder-a" className="col-span-1 ">
            <InputBox className="" label="NAME" />
            <InputBox className="" label="E-MAIL" />
            <InputBox className="" label="PHONE" />
            <InputBox className="" label="UNIVERSITY" />
          </div>
          <div id="input-holder-b" className="col-span-1">
            <InputBox label="GENDER" />
            <InputBox label="DISTRICT" />
            <InputBox label="STATE" />
            <InputBox label="PINCODE" />
          </div>
        </div>
        <div id="btn-cotainer p-4 row-span-2 flex justify-center items-center ">
          <button className="m-3 bg-orange-600 ml-96 mb-8 rounded-md text-3xl px-6 py-3">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
