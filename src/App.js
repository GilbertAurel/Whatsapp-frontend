import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/messages/sync").then((response) => {
      setMessages(response.data); // fetch all data once
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("b1cb1342566699daa6c6", {
      cluster: "ap1",
    });

    // open listener
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]); // keep old message and append new message
    });

    // close link to listener
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]); // dependencies

  console.log(messages);

  return (
    <div className="app">
      <div className="app__bg-green"></div>
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
