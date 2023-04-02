import "./friendList.css";
import luffy from "../Images/luffy.jpg";
const FriendList = () => {
  return (
    <div className="friend-list">
      <ul>
        <li className="smallWindow-friend">
          <div className="friend-list-left">
            <div className="profile">
              <img src={luffy} alt="Example" />
            </div>
            <div className="friend-list-middle">
              <div className="friend-name">路飞</div>
              <div className="last-message">321</div>
            </div>
          </div>
          <div className="friend-list-right">
            <div className="last-message-time">11:00</div>
          </div>
        </li>
        <li className="smallWindow-friend">
          <div>
            <div className="profile">
              <img src={luffy} alt="Example" />
            </div>
            <div className="friend-list-middle">
              <div className="friend-name">路飞</div>
              <div className="last-message">321</div>
            </div>
          </div>
          <div className="friend-list-right">
            <div className="last-message-time">11:00</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
