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

  async function handleLogin(event) {
    event.preventDefault();

    // Make a request to the authentication endpoint
    const response = await fetch("https://w5046166g6.goho.co/user", {
      method: "GET",
      // body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNjgxMDYwNzQ4LCJleHAiOjE2ODE2NjU1NDh9.nP4MFH28zQGmLIl8gJI6odTws4sDo1EdjVzJaNI-bxQSuvmhU31-jv6BPPhURHNisZx_lObnwc7mCz-Fq2-Gfg",
      },
    });

    const responseData = await response.json(); // Parse the response as JSON

    console.log(responseData.token); // Log the JSON data
    console.log(responseData)
    if (response.ok) {
      // Login is successful, set isLoggedIn state variable to true
      dispatch(setIsLoggedIn(true));
      console.log(response);
      // Navigate to the main page
      navigate("/main");
    } else {
      // Display an error message
      alert("Invalid username or password");
    }
  }

  // const logs = () => {
  //   dispatch(setIsLoggedIn(true));
  //   navigate("/main");
  // };
  return (
    <div className="loginPage">
      <video autoPlay muted loop>
        <source src={bgv} type="audio/mp4" />
      </video>
      <div className="login loginBoard">
        <form>
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

          <button type="submit" className="button-85" onClick={handleLogin}>
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
