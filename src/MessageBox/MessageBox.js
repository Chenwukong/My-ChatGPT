import "./messageBox.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import luffy from "../Images/luffy.jpg";

const MessageBox = () => {
  const texts = useSelector((state) => state.texts);
  console.log(texts);
  const renderText = () => {
    return texts.map((text, index) => {
      return (
        <div className="whole-self-message" key={index}>
          <div className="self-message-box">
            {/* {text.emojiComponent} */}
            <p>{text.text}</p>
          </div>
          <div className="self-message-profile">
            <img src={luffy} alt="Example" />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="message-box">
      <div className="self-message">{renderText()}</div>
    </div>
  );
};

export default MessageBox;
