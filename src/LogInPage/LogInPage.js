import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../actions";
import "./loginPage.css";
import bgv from "../Images/Project.mp4";
const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const login = useSelector((state) => state.isLoggedIn);
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  // async function handleLogin(event) {
  //   event.preventDefault();

  //   // Make a request to the authentication endpoint
  //   const response = await fetch("/api/login", {
  //     method: "POST",
  //     body: JSON.stringify({ username, password }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (response.ok) {
  //     // Login is successful, set isLoggedIn state variable to true
  //     dispatch(setIsLoggedIn(true));

  //     // Navigate to the main page
  //     navigate("/main");
  //   } else {
  //     // Display an error message
  //     alert("Invalid username or password");
  //   }
  // }

  const logs = () => {
    dispatch(setIsLoggedIn(true));
    navigate("/main");
  };
  useEffect(() => {
    console.log(bgv);
  });
  return (
    <div className="loginPage">
      <video autoPlay muted loop>
        <source src={bgv} type="audio/mp4" />
      </video>
      <div className="login loginBoard">
        <form onSubmit={logs}>
          <label htmlFor="username">账号:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br />

          <label htmlFor="password">密码:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />

          <button type="submit" className="button-85">
            登录
          </button>
        </form>
      </div>
    </div>
    // <div onClick={logs} style={{ fontSize: "20px" }}>
    //   123
    // </div>
  );
};

export default LogInPage;
