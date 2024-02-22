import React from "react";

function InputBox({ label = "default label", onChange, value }) {
  return (
    <div className="flex flex-col my-8 mx-2">
      <div className="flex items-start">
        <p className="ml-2 text-2xl text-rog">{label}</p>
      </div>
      <input
        type="text"
        className="rounded-sm p-2 m-2 flex items-start w-96 text-black bg-rog-lightest border border-rog"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default InputBox;
