import "./chatName.css";

const ChatName = () => {
  return (
    <div className="chat-name">
      <div className="chatName-text">海贼王群(13)</div>
      <div className="chat-option">
        <div>
          <ul>
            <li>置顶</li>
            <li>最小化</li>
            <li>最大化</li>
            <li>关闭</li>
          </ul>
        </div>
        <div className="chat-info">...</div>
      </div>
    </div>
  );
};

export default ChatName;
