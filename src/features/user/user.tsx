import React from "react";
import Image from "next/image";

type User = {
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  university: string;
  country: string;
};

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* User Image */}
      <div className="flex justify-center p-4 bg-blue-100">
        <Image
          src={user.image}
          alt={user.firstName}
          className="rounded-full h-24 w-24 object-cover"
        />
      </div>

      {/* User Info */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Maiden Name:</span> {user.maidenName}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Age:</span> {user.age}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Gender:</span> {user.gender}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Email:</span>{" "}
          <a href={`mailto:${user.email}`} className="text-blue-500">
            {user.email}
          </a>
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Phone:</span>{" "}
          <a href={`tel:${user.phone}`} className="text-blue-500">
            {user.phone}
          </a>
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Birthdate:</span> {user.birthDate}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">University:</span> {user.university}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Country:</span> {user.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
