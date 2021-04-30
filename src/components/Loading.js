import React from "react";
import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center className="grid place-items-center h-screen">
      <div>
        <Circle color="indigo" size={60} />
      </div>
    </center>
  );
};

export default Loading;
