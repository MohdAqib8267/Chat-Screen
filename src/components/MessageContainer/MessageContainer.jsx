import React, { useEffect, useRef, useState } from "react";
import "./MessageContainer.css";

const MessageContainer = ({ Info }) => {
  // console.log(Info);
  const [addMsg, setAddMsg] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const chatRef = useRef();
  const loadingRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        loadingRef.current = true;
        const data = await fetch(
          `https://qa.corider.in/assignment/chat?page=${pageNumber}`
        );
        const res = await data.json();
        setAddMsg((prev) => [...res.chats,...prev]);
        const chatContainer = chatRef.current;
        chatContainer.scrollTop = chatContainer.scrollHeight;
        loadingRef.current = false;
      } catch (error) {
        console.log(error);
        loadingRef.current = false;
      }
    };
    fetchData();
  }, [pageNumber]);

    useEffect(() => {
    const chatContainer = chatRef.current;
    console.log(chatRef);
    if (pageNumber === 0) {
      
      const scrollHeight = chatContainer.scrollHeight;
      const clientHeight = chatContainer.clientHeight;
      console.log(scrollHeight,clientHeight);
      chatContainer.scrollTop = scrollHeight - clientHeight;
    }
  }, [pageNumber]);

  const handleScroll = () => {
    const chatContainer = chatRef.current;
    if (
      !loadingRef.current &&
      chatContainer.scrollTop === 0 &&
      chatContainer.scrollHeight > chatContainer.clientHeight
    ) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  useEffect(() => {
    const chatContainer = chatRef.current;
    chatContainer.addEventListener("scroll", handleScroll);
    return () => {
      chatContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(addMsg);
  return (
    <div className="chat-messages" >
      <div className="chat-body"  ref={chatRef}>
        {addMsg?.map((msg) =>
          msg.sender.self === true ? (
            <div key={msg.id} className="own">
              {msg.message}
            </div>
          ) : (
            <div className="sender-container">
              <div className="sender-img">
                <img width="30px" height="30px"  src={msg.sender.image} alt="" />
              </div>
               <div key={msg.id} className="message">
              {msg.message}
            </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MessageContainer;



