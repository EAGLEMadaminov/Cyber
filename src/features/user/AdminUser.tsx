import React from "react";
import Image from "next/image";

interface User {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  image: string;
  address: {
    city: string;
    state: string;
  };
  country: string;
  university: string;
  company: {
    department: string;
    name: string;
    title: string;
  };
}

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 text-center">
        <Image
          width={96}
          height={96}
          className="w-24 h-24 rounded-full mx-auto border-4 border-white"
          src={user.image}
          alt={user.username}
        />
        <h2 className="text-white text-2xl font-semibold mt-4">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-purple-200">@{user.username}</p>
      </div>
      <div className="p-6">
        {/* Personal Info */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Personal Info
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-800">{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone:</span>
              <span className="text-gray-800">{user.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Gender:</span>
              <span className="text-gray-800 capitalize">{user.gender}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Age:</span>
              <span className="text-gray-800">{user.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Birthdate:</span>
              <span className="text-gray-800">
                {new Date(user.birthDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Address</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">City:</span>
              <span className="text-gray-800">{user.address.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">State:</span>
              <span className="text-gray-800">{user.address.state}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Country:</span>
              <span className="text-gray-800">{user.country}</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Education
          </h3>
          <div className="flex justify-between">
            <span className="text-gray-600">University:</span>
            <span className="text-gray-800">{user.university}</span>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Company Info
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Company Name:</span>
              <span className="text-gray-800">{user.company.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Department:</span>
              <span className="text-gray-800">{user.company.department}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Title:</span>
              <span className="text-gray-800">{user.company.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
