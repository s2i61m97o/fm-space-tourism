import "./App.css";
import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import MasterLayout from "./components/Layouts/MasterLayout";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destinations/Destination";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
