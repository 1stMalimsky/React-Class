import { Container } from "@mui/material";
import "./App.css";
import MuiNavbar from "./components/Navbar/MuiNavbar";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/Homepage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Container>
      {/* <MuiNavbar /> */}
      <Navbar />
      {/* <FirstComponent /> */}
      {/* <ListComponent /> */}
      {/* <GridComponent /> */}
      <HomePage />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
    </Container>
  );
}

export default App;
