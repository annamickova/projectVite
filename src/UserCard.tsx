import React from "react";
import { User } from "./types";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{user.name}</h3>
      <p>Věk: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Adresa: {user.address}</p>
      {user.isStudent !== undefined && (
        <p>Student: {user.isStudent ? "Ano" : "Ne"}</p>
      )}
      {user.hobbies !== undefined && (
            <p>Zájmy: {user.hobbies}</p>
        )}
    </div>
  );
}
