"use client";
import React, { useState } from "react";
import InputBox from "./InputBox";

function Registration() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState(0);
	const [university, setUniversity] = useState("");
	const [gender, setGender] = useState("");
	const [district, setDistrict] = useState("");
	const [state, setState] = useState("");
	const [pincode, setPincode] = useState(0);
	const [pic, setPic] = useState("");
	const [isUserOPJUStudent, setisUserOPJUStudent] = useState(false);

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
            <InputBox
              onChange={(e) => {
                setName(e.target.value);
              }}
              className=""
              label="NAME"
            />
            <InputBox
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=""
              label="E-MAIL"
            />
            <InputBox
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className=""
              label="PHONE"
            />
            <InputBox
              onChange={(e) => {
                setUniversity(e.target.value);
                const targetValue = e.target.value;
                const university = targetValue.toLowerCase();
                const finalUniversity = university.trim();
                if (
                  finalUniversity == "opju" ||
                  "opjindaluniversity" ||
                  "omprakashjindaluniversity"
                ) {
                  setisUserOPJUStudent(true);
                }
              }}
              className=""
              label="UNIVERSITY"
            />
          </div>
          <div id="input-holder-b" className="col-span-1">
            <InputBox
              onChange={(e) => {
                setGender(e.target.value);
              }}
              label="GENDER"
            />
            <InputBox
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              label="DISTRICT"
            />
            <InputBox
              onChange={(e) => {
                setState(e.target.value);
              }}
              label="STATE"
            />
            <InputBox
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              label="PINCODE"
            />
          </div>
        </div>
        <div id="btn-cotainer p-4 row-span-2 flex justify-center items-center ">
          <button
            className="m-3 bg-orange-600 ml-96 mb-8 rounded-md text-3xl px-6 py-3"
            onClick={() => {
              try {
                fetch("http://localhost:4000/api/create/user", {
                  method: "POST",
                  body: JSON.stringify({
                    userEmail: email,
                    userName: name,
                    userPic: pic,
                    userPhoneNumber: phone,
                    userUniversity: university,
                    isUserOPJUStudent: isUserOPJUStudent,
                    userAddress: {
                      district: district,
                      state: state,
                      pincode: pincode,
                    },
                    userGender: gender,
                  }),
                  headers: {
                    "Content-type": "application/json",
                    user_email: email,
                  },
                })
                  .then(async (res) => {
                    if (!res.ok) {
                      throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    // alert("ho gya bhenco");
                    const json = await res.json();

										// Process the response JSON here
									})
									.catch((error) => {
										console.log(
											"Error during fetch:",
											error
										);
										// Handle the error appropriately (e.g., show a message to the user)
									});
								``;
							} catch (error) {
								console.log(error);
							}
						}}
					>
						<a href="/legacy">NEXT</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Registration;
