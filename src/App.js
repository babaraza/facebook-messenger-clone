import React, { useState, useEffect } from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import firebase from "firebase";
import db from "./firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      text: input,
      name: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setMessages([...messages, { name: username, text: input }]);
    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ message: doc.data(), id: doc.id }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter Username"));
  }, []);

  return (
    <div className="app">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="logo"
      />
      <h2>Messenger, lets go 🚀 </h2>
      <h3>Welcome {username} </h3>

      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Enter a message...</InputLabel> */}
          <Input
            className="app__input"
            value={input}
            placeholder="Enter a message"
            variant="outlined"
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            type="submit"
            variant="contained"
            color="primary"
            disabled={!input}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ message, id }) => (
          <Message key={id} text={message} name={username} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
