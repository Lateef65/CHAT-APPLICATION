import "./App.css";
import io from "socket.io-client";
import Chat from "./Chat";
import { useState } from "react";

const socket = io("http://localhost:3001");

function App() {
  const [Username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (Username !== "" && room !== "") {
      socket.emit("join_room", room);
    } else {
      alert("Please fill in the form");
    }
  }



  return (
    <div className="App">

      <h1>join a chat</h1>
      <input type="text" placeholder="john..." onChange={(e) =>{setUsername(e.target.value)}}/>
      <input type="text" placeholder="Room ID..." onChange={(e) =>{setRoom(e.target.value)}} />
      <button onClick={joinRoom}>Join A Room</button>
      <Chat socket={socket} username={Username} room={room}/>
    </div>
  );

}

export default App;
