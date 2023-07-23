import React, { useEffect, useState, useRef } from 'react';
import './Chatbox.css';
import Navbar from '../Navbar/Navbar';
import MessageContainer from '../MessageContainer/MessageContainer';
import InputContainer from '../InputContainer/InputContainer';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const fetchData = () => {
      const res = fetch(`https://qa.corider.in/assignment/chat?page=0`)
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });

      res.then((op) => {
        setMessages(op);
      });
    };

    fetchData();
  }, []);




  return (
    <div className="chat-container">
      <Navbar Info={messages} />
      <hr />

      <MessageContainer Info={messages} />

      <InputContainer />
    </div>
  );
};

export default Chatbox;
