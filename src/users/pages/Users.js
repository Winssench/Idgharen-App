import React from "react";

import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Omar Ch",
      image:
        "https://images.unsplash.com/photo-1518992028580-6d57bd80f2dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
