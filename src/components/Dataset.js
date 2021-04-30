import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "../firebase";
import { forwardRef } from "react";

const Dataset = forwardRef(
  ({ id, username, userId, timestamp, profileImage, userComment }, ref) => {
    const [user] = useAuthState(auth);

    const deleteComment = (docId) => {
      database.collection("comments").doc(docId).delete();
    };

    return (
      <div className="lg:flex lg:justify-center" ref={ref}>
        <div className="mt-4 border-2 px-3 py-3 rounded bg-gray-100 shadow-lg lg:w-4/5">
          <div className="flex justify-between">
            <div className="flex items-center">
              {profileImage && (
                <img src={profileImage} alt="" className="h-10 rounded-full" />
              )}
              <h3 className="text-sm ml-2">{username}</h3>
            </div>

            <h3 className="text-sm">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </h3>
          </div>
          <div className="mt-3">
            <p className="font-semibold tracking-wider">{userComment}</p>
          </div>
          <div className="flex justify-end px-5">
            {user.uid === userId && (
              <button
                onClick={() => deleteComment(id)}
                className="bg-red-400 px-5 py-1 rounded text-white focus:outline-none hover:bg-purple-500"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default Dataset;
