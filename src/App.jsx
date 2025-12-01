import { Outlet } from "react-router-dom";
import FooterBar from "./components/footer";
import NavigationBar from "./components/navbar";
import "./global.css";
import HomePage from "./screens/home";

function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <FooterBar />
    </>
  );
}

export default App;
