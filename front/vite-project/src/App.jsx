import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AgendarTurnoView from "./views/AgendarTurnoView";
import AppointmentsView from "./views/AppointmentsView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import { Routes, Route } from "react-router-dom";
import Servicios from "./views/ServicesView";
import AboutUs from "./views/AboutUs";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/service" element={<Servicios />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/appointments" element={<AppointmentsView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/scheduleAppointment" element={<AgendarTurnoView />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
