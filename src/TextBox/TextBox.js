import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addText, toggleEmoji } from "../actions";
import EmojiPicker, { EmojiStyle, Emoji } from "emoji-picker-react";
import "./textBox.css";

import { useSelector } from "react-redux";

const TextBox = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [previousSelectedEmoji, setPreviousSelectedEmoji] = useState("");

  const emojiToggle = useSelector((state) => state.showEmoji);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedEmoji && !inputValue.includes(selectedEmoji)) {
      setInputValue(
        (prevValue) =>
          prevValue + String.fromCodePoint(parseInt(selectedEmoji, 16))
      );
    } else if (selectedEmoji && inputValue.includes(selectedEmoji)) {
      setInputValue(
        (prevValue) =>
          prevValue.replace(previousSelectedEmoji, "") +
          String.fromCodePoint(parseInt(selectedEmoji, 16))
      );
    }
    setPreviousSelectedEmoji(selectedEmoji);
  }, [selectedEmoji]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      text: inputValue,
      emojiComponent: selectedEmoji ? (
        <span>
          <Emoji
            unified={selectedEmoji}
            emojiStyle={EmojiStyle.APPLE}
            size={22}
          />
        </span>
      ) : null,
    };

    dispatch(addText(payload));
    setInputValue("");
    setSelectedEmoji("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const payload = {
        text: inputValue,
        emojiComponent: selectedEmoji ? (
          <span>
            <Emoji
              unified={selectedEmoji}
              emojiStyle={EmojiStyle.APPLE}
              size={22}
            />
          </span>
        ) : null,
      };
      dispatch(addText(payload));
      setInputValue("");
      setSelectedEmoji("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function onEmojiClick(emojiData, event) {
    setSelectedEmoji(emojiData.unified);
    dispatch(toggleEmoji());
  }

  return (
    <div className="text-box">
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className="send">
        <button onClick={handleSubmit}>发送(S)</button>
      </div>
      {/* emoji container---------------- */}
      <div
        className="emoji-container"
        style={emojiToggle ? {} : { display: "none" }}
      >
        <h2>Emoji Picker React 4 Demo</h2>
        <div className="show-emoji">
          Your selected Emoji is:
          {selectedEmoji ? (
            <Emoji
              unified={selectedEmoji}
              emojiStyle={EmojiStyle.APPLE}
              size={22}
            />
          ) : null}
        </div>

        <div className="emoji-picker-container">
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            autoFocusSearch={false}
            searchDisabled={true}
            height={500}
            width={500}
            className="emoji"
            categories={[
              {
                category: "suggested",
                name: "最近常用",
              },
              {
                category: "smileys_people",
                name: "表情与人物",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TextBox;
