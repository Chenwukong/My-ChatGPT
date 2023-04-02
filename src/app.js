import Main from "./Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useHistory,
} from "react-router-dom";
import { useSelector } from "react-redux";
import LogInPage from "./LogInPage/LogInPage";
import "./app.css";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route
          path="/main"
          element={isLoggedIn ? <Main /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
