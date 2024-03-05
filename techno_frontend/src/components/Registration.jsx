'use client';
import React, { useEffect, useRef, useState } from 'react';
import InputBox from './InputBox';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from './ui/movingBorderButton';

import localFont from 'next/font/local';
const subwayFont = localFont({ src: '../app/fonts/subway.ttf' });

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [university, setUniversity] = useState('');
  const [gender, setGender] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState(0);
  const [pic, setPic] = useState('');
  const [isUserOPJUStudent, setisUserOPJUStudent] = useState(false);
  const [InputUser, setInputUser] = useState({});
  const searchParams = useSearchParams();
  const urlRef = searchParams.get('urlRef');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);

  const isValidEmail = (email) => {
    const domain = '@opju.ac.in';
    return email.endsWith(domain);
  };
  // const nameRef = searchParams.get("nameRef");
  useEffect(() => {
    const recEmail = urlRef;
    // const parts = urlRef.split("/email?=");
    // const recPicture = parts[0];
    // const secondParts = parts[1];
    // const emailAndName = secondParts.split("/name?=");
    // const recEmail = emailAndName[0];
    // const recName = emailAndName[1];
    // This code will run only once when the component mounts
    // You can call setState here
    setEmail(recEmail);
    // setName(recName);
    // setPic(recPicture);
    // console.log(recEmail);
    // console.log(recName);
    // console.log(recPicture);
    if (isValidEmail(recEmail)) {
      setisUserOPJUStudent(true);
    }
    // console.log(secondParts);
  }, []);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleNormalButtonClick = () => {
    if (isValidEmail(email)) {
    }
    setInputUser(
      JSON.stringify({
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
      })
    );
    setIsOpen(true);
  };

  const handleClosePopup = (event) => {
    if (event.target.classList.contains('overlay')) {
      setIsOpen(false);
    }
  };

  const phoneValidation = () => {
    // console.log(typeof phone);
    const data = phone;
    const numArr = data.toString();
    const length = numArr.length;
    // isNumber(numArr);
    // if (isNumber) {
    if (length == 10) {
      // alert("sahi hai");
      handleNormalButtonClick();
    } else {
      alert('invalid phone number');
      // }
    }
  };

  return (
    <div className="text-white bg-white-300 flex w-full flex-col items-center justify-center ">
      <p className="text-4xl mb-2">REGISTRATION</p>
      <div className="border m-10 border-blue-3000 px-3 md:px-10 flex-col flex-wrap">
        <div
          id="input-holders"
          className="flex my-5 items-center justify-center flex-wrap"
        >
          <div id="input-holder-a" className="flex flex-col m-3 gap-3 ">
            <InputBox
              onChange={(e) => {
                setName(e.target.value);
              }}
              // className="m-10"
              label="NAME"
              value={name}
            />
            <div className="flex flex-col my-4">
              <div className="flex items-start">
                <p className="ml-2 text-sm xl:text-2xl">EMAIL </p>
              </div>
              <input
                type="email"
                className="rounded-sm p-2 m-2 flex items-start w-76 text-black"
                // onChange={onChange}
                // type="email"
                value={email}
                readOnly
              />
            </div>
            <InputBox
              onChange={(e) => {
                // isNumber(e.target.value);
                setPhone(e.target.value);
              }}
              className="my-4"
              label="PHONE"
            />
            <InputBox
              onChange={(e) => {
                setUniversity(e.target.value);
              }}
              className=""
              label="UNIVERSITY"
            />
          </div>
          <div id="input-holder-b" className="flex flex-col m-3 gap-4 ">
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
            <div className="flex flex-col  justify-evenly xl:text-2xl pl-4 text-sm md:text-sm  xl:pb-11 xl:pl-4">
              <div>
                <p>GENDER</p>
              </div>
              <div className="flex justify-evenly xl:text-xl xl:pt-2 pb-4 pt-4">
                {' '}
                <label>
                  <input
                    className=""
                    type="radio"
                    value="male"
                    checked={selectedGender === 'male'}
                    onChange={handleGenderChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    checked={selectedGender === 'female'}
                    onChange={handleGenderChange}
                  />
                  Female
                </label>{' '}
                <label>
                  <input
                    className=""
                    type="radio"
                    value="others"
                    checked={selectedGender === 'others'}
                    onChange={handleGenderChange}
                  />
                  Others
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-cotainer  row-span-2  flex justify-center items-center "></div>
      {/* <div className="flex flex-col items-center  text-white  justify-center h-[100%] w-full"> */}
      <button
        className="bg-red-500 text-3xl px-6 py-2 mb-4 rounded-md transition-transform transform hover:scale-105"
        onClick={phoneValidation}
      >
        Register
      </button>
      {isOpen && (
        <div className="overlay" onClick={handleClosePopup}>
          <div className="bg-black shadow-md rounded-lg p-6">
            {/* <div className="flex items-center justify-center">
                    <img
                      className="w-24 h-24 rounded-full object-cover"
                      src={pic}
                      alt="User Avatar"
                    />
                  </div> */}
            <div className="">
              <p className="text-lg font-semibold">Name: {name}</p>
              <p className="text-white">Email: {email}</p>
              <p className="text-white">Phone no.: {phone}</p>
              <p className="text-white">University: {university}</p>
              <p className="text-white">Gender: {selectedGender}</p>
              <p className="text-white">
                Address: {district}, {state}, {pincode}
              </p>
            </div>
            {/*<button
                    className=" bg-red-400 mt-4  rounded-md text-1xl px-3 py-1 justify-end"
                    onClick={() => {
                      try {
                        fetch("http://technorollix.opju.ac.in:4000/api/create/user", {
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
                            // console.log(res);
                            window.location.href = `/registration/invitations?emailRef=${email}`;
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
					</button> */}
            <div className="flex flex-col items-center  text-white  justify-center h-[100%] w-full">
              <button
                className="bg-orange-500 text-3xl px-6 py-2 mb-4 rounded-md transition-transform transform hover:scale-105"
                onClick={phoneValidation}
              >
                Register
              </button>
              {isOpen && (
                <div className="overlay" onClick={handleClosePopup}>
                  <div className="bg-[#000000] neon-text-red-lighter shadow-md rounded-lg p-6">
                    {/* <div className="flex items-center justify-center">
                      <img
                        className="w-24 h-24 rounded-full object-cover"
                        src={pic}
                        alt="User Avatar"
                      />
                    </div> */}
                    <div className="mt-4">
                      <p className="text-lg font-semibold">Name: {name}</p>
                      <p className="text-white">Email: {email}</p>
                      <p className="text-white">Phone no.: {phone}</p>
                      <p className="text-white">University: {university}</p>
                      <p className="text-white">Gender: {selectedGender}</p>
                      <p className="text-white">
                        Address: {district}, {state}, {pincode}
                      </p>
                    </div>
                    <button
                      className=" bg-orange-400 mt-4  rounded-md text-1xl px-3 py-1 justify-end"
                      onClick={() => {
                        try {
                          fetch(
                            'http://technorollix.opju.ac.in:4000/api/create/user',
                            {
                              method: 'POST',
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
                                'Content-type': 'application/json',
                                user_email: email,
                              },
                            }
                          )
                            .then(async (res) => {
                              if (!res.ok) {
                                throw new Error(
                                  `HTTP error! Status: ${res.status}`
                                );
                              }
                              // alert("ho gya bhenco");
                              // console.log(res);
                              window.location.href = `/registration/invitations?emailRef=${email}`;
                              const json = await res.json();

                              // Process the response JSON here
                            })
                            .catch((error) => {
                              console.log('Error during fetch:', error);
                              // Handle the error appropriately (e.g., show a message to the user)
                            });
                          ``;
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Create account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;
