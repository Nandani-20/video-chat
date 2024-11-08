import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <div>
      <h1>Options</h1>

      <div className="d-flex gap-5">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="idToCall">Enter Id to call</label>
          <input
            type="text"
            name="idToCall"
            id="idToCall"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />

          {callAccepted && !callEnded ? (
            <button onClick={leaveCall}>Leave Call</button>
          ) : (
            <button onClick={() => callUser(idToCall)}>Call</button>
          )}
        </div>
      </div>

      {children}
    </div>
  );
};

export default Options;
