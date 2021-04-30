import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "../firebase";
import firebase from "firebase";

const Textbox = () => {
  const [user] = useAuthState(auth);
  const [comment, setComment] = useState("");

  const post = (e) => {
    e.preventDefault();

    if (!comment) return alert("Please enter you'r comment...");

    database.collection("comments").add({
      userName: user.displayName,
      userId: user.uid,
      profileImage: user.photoURL,
      userPost: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setComment("");
  };

  return (
    <div className="sticky top-0">
      <div className="p-3 lg:flex lg:justify-center">
        <form className="lg:w-4/5">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Add comment..."
            className="border rounded border-purple-800 w-full py-5 sm:text-lg px-3 focus:outline-none focus:ring-1 focus:ring-purple-700 font-semibold placeholder-purple-400"
          />
          <div className="">
            <button
              type="submit"
              onClick={post}
              className=" border-purple-800 text-white mt-3 py-1 px-2 w-full sm:lg:w-4/5 bg-purple-400 rounded focus:outline-none focus:ring-1 focus:ring-purple-600"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Textbox;
