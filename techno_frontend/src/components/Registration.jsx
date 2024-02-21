"use client";
import React, { useEffect, useRef, useState } from "react";
import InputBox from "./InputBox";
import { useRouter, useSearchParams } from "next/navigation";

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
	const searchParams = useSearchParams();
	const urlRef = searchParams.get("urlRef");
	// const nameRef = searchParams.get("nameRef");
	useEffect(() => {
		const parts = urlRef.split("/email?=");

		const recPicture = parts[0];
		const secondParts = parts[1];
		const emailAndName = secondParts.split("/name?=");
		const recEmail = emailAndName[0];
		const recName = emailAndName[1];
		// This code will run only once when the component mounts
		// You can call setState here
		setPic(recPicture);
		setEmail(recEmail);
		setName(recName);
		// console.log(recEmail);
		// console.log(recName);
		console.log(recPicture);
		// console.log(secondParts);
	}, []);


	return (
		<div className="absolute text-white flex flex-col items-center justify-center ">
			<p className="text-4xl mb-2">REGISTRATION</p>
			<div className="border border-gray-3000 px-4">
				<div
					id="input-holders"
					className="grid grid-cols-2 gap-2  row-span-4"
				>
					<div id="input-holder-a" className="col-span-1 ">
						<div className="flex flex-col my-8 mx-2">
							<div className="rounded-full h-40 w-40 overflow-hidden">
								<img src={pic} alt="Your Image" className="object-cover h-full w-full" />
							</div>
							<div className="flex items-start">
								<p className="ml-2 text-2xl">Name</p>
							</div>
							<input
								type="text"
								className="rounded-sm p-2 m-2 flex items-start w-96 text-black"
								// onChange={onChange}
								// type="email"
								value={name}
								readOnly
							/>
						</div>
						<div className="flex flex-col my-8 mx-2">
							<div className="flex items-start">
								<p className="ml-2 text-2xl">Email</p>
							</div>
							<input
								type="email"
								className="rounded-sm p-2 m-2 flex items-start w-96 text-black"
								// onChange={onChange}
								// type="email"
								value={email}
								readOnly
							/>
						</div>
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
									"op jindal university" ||
									"om prakash jindal university"
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
				<div className="btn-cotainer  row-span-2  flex justify-center items-center ">
					<button
						className=" bg-orange-600 m-2 mb-4  rounded-md text-3xl px-6 py-3"
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
											throw new Error(
												`HTTP error! Status: ${res.status}`
											);
										}
										// alert("ho gya bhenco");
										window.location.href = `/registration/next?emailRef=${email}`;
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
						NEXT
						{/* <a href={`/registration/next?emailRef=${email}`}> */}
						{/* </a> */}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Registration;