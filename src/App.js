import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./components/pages/BookingPage";
import SignUpPage from "./components/pages/SignUpPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
