"use client";
import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../services/user";
import UserCard from "../../../features/user/user";

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

const UserCardPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getAll() {
      try {
        let data = await getAllUser();
        if (data) {
          setUsers(data.users);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAll();
  }, []);

  return (
    <div className="flex flex-wrap gap-1 mt-10">
      {users.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UserCardPage;
