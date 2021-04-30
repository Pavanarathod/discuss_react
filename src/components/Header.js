import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="flex px-3 py-3 bg-red-50 justify-between sm:justify-evenly items-center sticky top-0">
      <div>
        <h1 className="text-lg sm:text-3xl">Welocme: {user?.displayName}</h1>
      </div>
      <div>
        <button
          onClick={() => auth.signOut()}
          className="border bg-purple-600 py-1 px-3 sm:py-2 sm:px-5 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-800"
        >
          {" "}
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
