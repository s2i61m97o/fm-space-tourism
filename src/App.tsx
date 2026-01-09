import "./App.css";
import {BrowserRouter, Routes, Route, Navigate} from "react-router";
import MasterLayout from "./components/Layouts/MasterLayout";
import Home from "./pages/Home";
import DestinationLayout from "./components/Layouts/DestinationLayout";
import Destination from "./pages/Destination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<DestinationLayout />}>
            <Route index element={<Navigate to="moon" />} />
            <Route path=":planet" element={<Destination />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
