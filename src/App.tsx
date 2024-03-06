// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorPatientSelection from "./components/DoctorPatientSelection";
import Controller from "./components/Patient";
import DoctorAvailability from "./components/DoctorAvailability";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorPatientSelection />} />
        <Route path="/patient" element={<Controller />} />
        <Route path="/doctor" element={<DoctorAvailability />} />
      </Routes>
    </Router>
  );
}

export default App;
