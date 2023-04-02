import TextBox from "./TextBox/TextBox";
import ChatFunction from "./ChatFunction/ChatFunction";
import MessageBox from "./MessageBox/MessageBox";
import ChatName from "./ChatName/ChatName";
import FriendList from "./FriendList/FriendList";
import FunctionList from "./FunctionList/FunctionList";
import "./main.css";

import { legacy_createStore as createStore } from "redux";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

const Main = () => {
  window.addEventListener(
    "mousewheel",
    function (event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  //firefox
  window.addEventListener(
    "DOMMouseScroll",
    function (event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  return (
    <Provider store={store}>
      <div className="whole">
        <div className="function">
          <FunctionList />
        </div>
        <div className="friend">
          <FriendList />
        </div>
        <div className="chat">
          <ChatName />
          <MessageBox />
          <ChatFunction />
          <TextBox />
        </div>
      </div>
    </Provider>
  );
};

export default Main;
