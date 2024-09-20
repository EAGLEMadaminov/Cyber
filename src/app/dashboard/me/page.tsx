"use client";
import React, { useState, useEffect } from "react";
import { newAxiosInstance } from "../../../utils/libs/axios";
import { AdminUser } from "../../../features";

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

const UserProfile = () => {
  const defaultUser: User = {
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    email: "",
    phone: "",
    username: "",
    birthDate: "",
    image: "",
    address: {
      city: "",
      state: "",
    },
    country: "",
    university: "",
    company: {
      department: "",
      name: "",
      title: "",
    },
  };

  const [user, setUser] = useState<User>(defaultUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    async function getUser() {
      setLoading(true);
      try {
        const { data } = await newAxiosInstance.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (data) {
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getUser();
  }, []);
  return (
    <div className="w-full">
      {loading ? (
        <p className="text-2xl text-center">Loading...</p>
      ) : (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <AdminUser user={user} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
