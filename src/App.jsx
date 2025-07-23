import { Outlet } from "react-router-dom";
import "./App.css";
import Header from"./components/MainPage/Header/Header.jsx";

function App() {
  return (
    <div className="content_wrapper">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
