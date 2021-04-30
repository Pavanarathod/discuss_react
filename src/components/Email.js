import React, { useState } from "react";
import { auth } from "../firebase";
const Email = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inEmail, setInEmail] = useState("");
  const [inPassword, setInPassword] = useState("");

  const registerNewUser = (e) => {
    e.preventDefault();
    if (!username) {
      return alert("Please enter the username");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) =>
        authUser.user.updateProfile({
          displayName: username,
        })
      )
      .catch((err) => alert(err.message));
  };

  const singIN = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(inEmail, inPassword)
      .catch((err) => alert(err.message));
  };

  return (
    <div className="px-8 py-8 max-w-lg space-y-2 border-1 border-gray-400 mt-6 shadow-lg sm:ml-auto">
      <h2 className="text-3xl font-semibold tracking-wider text-center text-blue-500">
        Create your account
      </h2>
      <div className="pb-3">
        <form className="flex flex-col space-y-2">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="p-3 rounded border border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-400 placeholder-indigo-500"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="p-3 rounded border border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-400 placeholder-indigo-500"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="p-3 rounded border border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-400 placeholder-indigo-500"
          />
          <button
            onClick={registerNewUser}
            type="submit"
            className="p-2 border font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500  bg-blue-500 text-white rounded"
          >
            Register
          </button>
        </form>
      </div>
      <p className="text-center text-black">Already have an account.?</p>
      <h2 className="text-3xl font-semibold tracking-wider rounded text-center text-green-400">
        Sign in
      </h2>
      <div>
        <form className="flex flex-col space-y-2">
          <input
            value={inEmail}
            onChange={(e) => setInEmail(e.target.value)}
            type="email"
            placeholder="Enter you'r emial"
            className="p-3 rounded border border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 placeholder-green-600"
          />
          <input
            value={inPassword}
            onChange={(e) => setInPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 rounded border border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 placeholder-green-600"
          />
          <button
            onClick={singIN}
            type="submit"
            className="border font-semibold p-2 text-white rounded bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Email;
