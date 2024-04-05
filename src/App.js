import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormDataProvider } from "./FormDataContext"; // Import the provider
import Homepage from "./Homepage";
import BookingPage from "./components/pages/BookingPage";
import BookingDetailsPage from "./components/pages/BookingDetailsPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <FormDataProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/details" element={<BookingDetailsPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </FormDataProvider>
    </BrowserRouter>
  );
}

export default App;
