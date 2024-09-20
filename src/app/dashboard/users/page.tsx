"use client";
import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../services/user";
import UserCard from "../../../features/user/user";
import { User } from "../../../types/user";

const UserCardPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAll() {
      setLoading(true);
      try {
        const data = await getAllUser();
        if (data) {
          setUsers(data.users);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getAll();
  }, []);

  return (
    <div className="mt-10">
      {loading ? (
        <p className="text-[18px] text-center ">Loading...</p>
      ) : (
        <div className="flex flex-wrap gap-1 ">
          {users.map((user) => {
            return <UserCard user={user} key={user.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default UserCardPage;
