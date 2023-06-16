import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import AddGPU from "./components/AddGPU";
import RentGPU from "./components/RentGPU";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/addgpu" Component={AddGPU} />
          <Route path="/rentgpu" Component={RentGPU} />

          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
