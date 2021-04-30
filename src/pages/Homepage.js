import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Dataset from "../components/Dataset";
import Header from "../components/Header";
import Textbox from "../components/Textbox";
import { database } from "../firebase";
import FlipMove from "react-flip-move";

const Homepage = () => {
  const userComments = database
    .collection("comments")
    .orderBy("timestamp", "desc");
  const [data] = useCollection(userComments);

  return (
    <div className="h-screen w-full">
      <Header />
      <Textbox />
      <FlipMove>
        {data?.docs.map((doc) => (
          <Dataset
            key={doc.id}
            id={doc.id}
            username={doc.data().userName}
            userId={doc.data().userId}
            profileImage={doc.data().profileImage}
            userComment={doc.data().userPost}
            timestamp={doc.data().timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Homepage;
