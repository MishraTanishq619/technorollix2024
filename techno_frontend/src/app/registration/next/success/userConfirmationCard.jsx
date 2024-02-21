import React from 'react';

const UserCard = ({ userData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-center">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={userData.userPic}
          alt="User Avatar"
        />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">{userData.userName}</p>
        <p className="text-gray-500">{userData.userEmail}</p>
        <p className="text-gray-500">{userData.userPhoneNumber}</p>
        <p className="text-gray-500">{userData.userUniversity}</p>
        <p className="text-gray-500">{userData.userGender}</p>
        {/* <p className="text-gray-500">{userData.userAddress.district}, {userData.userAddress.state}, {userData.userAddress.pincode}</p> */}
      </div>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-8 block mx-auto">
        Create account
      </button>
    </div>
  );
};

export default UserCard;
