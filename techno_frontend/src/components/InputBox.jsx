import React from "react";

function InputBox({ label = "default label" ,onChange}) {
  return (
    <div className="flex flex-col my-8 mx-2">
      <div className="flex items-start">
        <p className="ml-2 text-2xl">{label}</p>
      </div>
      <input
        type="text"
        className="rounded-sm p-2 m-2 flex items-start w-96 text-black"
        onChange={onChange}
      />
    </div>
  );
}

export default InputBox;
