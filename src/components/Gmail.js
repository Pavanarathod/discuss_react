import React from "react";
import { auth, provider } from "../firebase";

const Gmail = () => {
  const singin = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <div className="px-8 py-8 max-w-lg space-y-2 border-1 border-gray-400 mt-6 shadow-lg sm:mr-auto">
      <div className="flex flex-col justify-evenly">
        <h3 className="text-center mt-3 text-3xl font-semibold text-blue-400">
          sing in with google
        </h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          alt="React"
        />
        <button
          onClick={singin}
          className="bg-blue-700 w-full p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500 "
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Gmail;
