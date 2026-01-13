import "./App.css";
import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import MasterLayout from "./components/Layouts/MasterLayout";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destinations/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destination">
            <Route index element={<Navigate to="moon" replace />} />
            <Route path=":planet" element={<Destination />} />
          </Route>
          <Route path="/crew">
            <Route index element={<Navigate to="commander" replace />} />
            <Route path=":crew" element={<Crew />} />
          </Route>
          <Route path="/technology">
            <Route index element={<Navigate to="launch-vehicle" replace />} />
            <Route path=":tech" element={<Technology />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
