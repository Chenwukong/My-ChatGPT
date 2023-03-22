import React, { useState, useEffect} from "react";
import './ChatPage.css'

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => setData(data));
  })

  //每次输入框打字会调用此函数并更改新message的state
  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newMessage.trim()){
       return;
    }
    setMessages([...messages, { id: Date.now(), text: newMessage }]);
    setNewMessage("");
  };


  const renderMessages = () =>{
   return messages.map((message) => (
      <div key={message.id} className="message">
        {message.text}
      </div>
    ))
  }

  return (
    <div className="chat-page">
      {/* 遍历数据里的信息并且展示 */}
      <div className="messages">
        {renderMessages()}
        <div></div>
      </div>
      {/*整个输入框,包含提交按钮 */}
      <div className="input-zone">
      <form onSubmit={handleSubmit} className="message-form">
        {/* 输入框 */}
        <div className="insert-area">
          <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="insert-bar"
         />
          <button type="submit">Send</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ChatPage;