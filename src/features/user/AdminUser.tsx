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
    <article className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 text-center">
        <Image
          width={96}
          height={96}
          className="w-24 h-24 rounded-full mx-auto border-4 border-white"
          src={user.image ? user.image : ""}
          alt={user.username}
        />
        <h2 className="text-white text-2xl font-semibold mt-4">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-purple-200">@{user.username}</p>
      </header>

      <section className="p-6">
        <section aria-labelledby="personal-info">
          <h3
            id="personal-info"
            className="text-lg font-semibold mb-2 text-gray-800"
          >
            Personal Info
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <strong className="text-gray-600">Email:</strong>
              <span className="text-gray-800">{user.email}</span>
            </li>
            <li className="flex justify-between">
              <strong className="text-gray-600">Phone:</strong>
              <span className="text-gray-800">{user.phone}</span>
            </li>
            <li className="flex justify-between">
              <strong className="text-gray-600">Gender:</strong>
              <span className="text-gray-800 capitalize">{user.gender}</span>
            </li>
            <li className="flex justify-between">
              <strong className="text-gray-600">Age:</strong>
              <span className="text-gray-800">{user.age}</span>
            </li>
            <li className="flex justify-between">
              <strong className="text-gray-600">Birthdate:</strong>
              <span className="text-gray-800">
                {new Date(user.birthDate).toLocaleDateString()}
              </span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="address" className="mb-4">
          <h3 id="address" className="text-lg font-semibold mb-2 text-gray-800">
            Address
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <strong className="text-gray-600">City:</strong>
              <span className="text-gray-800">{user.address.city}</span>
            </li>
            <li className="flex justify-between">
              <strong className="text-gray-600">State:</strong>
              <span className="text-gray-800">{user.address.state}</span>
            </li>
            <li className="flex justify-between">
              <strong className="text-gray-600">Country:</strong>
              <span className="text-gray-800">{user.country}</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="education" className="mb-4">
          <h3
            id="education"
            className="text-lg font-semibold mb-2 text-gray-800"
          >
            Education
          </h3>
          <p className="flex justify-between">
            <strong className="text-gray-600">University:</strong>
            <span className="text-gray-800">{user.university}</span>
          </p>
        </section>

        <section aria-labelledby="company-info">
          <h3
            id="company-info"
            className="text-lg font-semibold mb-2 text-gray-800"
          >
            Company Info
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <strong className="text-gray-600">Company Name:</strong>
              <span className="text-gray-800">{user.company.name}</span>
            </li>
            <li className="flex justify-between">
              <strong className="text-gray-600">Department:</strong>
              <span className="text-gray-800">{user.company.department}</span>
            </li>
            <li className="flex justify-between">
              <strong className="text-gray-600">Title:</strong>
              <span className="text-gray-800">{user.company.title}</span>
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
};

export default UserProfile;
