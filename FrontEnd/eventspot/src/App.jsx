import Home from "./Pages/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Registration from "./Pages/Register";
import Dashboard from "./Admin/Dashboard";
import Login from "./Admin/Login";
import PendingBookings from "./Admin/Booking/PendingBookings";
import AcceptedBookings from "./Admin/Booking/AcceptedBookings";
import ClosedBookings from "./Admin/Booking/ClosedBookings";
import Halls from "../src/Admin//Halls";
import About from "./Pages/About";
import ProfilePage from "./Admin/Profile";

import { AddHall } from "./Admin/AddHall";
import Contact from "./Pages/Contact";


function App() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="reg" element={<Registration />}></Route>

          <Route path="/Admin/Login" element={<Login />}></Route>

          {token ? (
            <>
              <Route path="/Admin/Dashboard/" element={<Dashboard />}>
                <Route path="PendingBookings" element={<PendingBookings />} />
                <Route path="AcceptedBookings" element={<AcceptedBookings />} />
                <Route path="ClosedBookings" element={<ClosedBookings />} />
                <Route path="Halls" element={<Halls />} />
                <Route path="addHall" element={<AddHall />} />
              </Route>

              <Route path="/admin/register" element={<Registration />} />
              <Route path="/admin/profile" element={<ProfilePage />} />
            </>
          ) : (
            <Route path="/Admin/Login" element={<Login />}></Route>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
