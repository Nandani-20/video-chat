import React, { useContext, useEffect } from "react";
import { SocketContext, useSocketContext } from "../context/SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  useEffect(() => {
    if (myVideo.current && stream) {
      //   console.log("Assigning stream to myVideo");
      myVideo.current.srcObject = stream;
    }
  }, [stream]); // Runs every time the stream changes

  return (
    <div>
      <h1>Video Player</h1>

      <div className="d-flex">
        {stream && (
          <div className="my-video">
            <p>{name}</p>
            <video muted playsInline ref={myVideo} autoPlay></video>
          </div>
        )}

        {callAccepted && !callEnded && (
          <div className="user-video">
            <p>{call.name}</p>
            <video playsInline ref={userVideo} autoPlay></video>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
