import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from './axios'

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/api/v1/messages/new', {
        message: input,
        name: "Test Name",
        timestamp: "Test timestamp",
        received: false
    })

    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__header-info">
          <h3>Gilbert</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__header-icons">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message chat__message${
              (message.received && "--sender") || "--receiver"
            }`}
          >
            {/* <span className="chat__name">Gilbert</span> */}
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
