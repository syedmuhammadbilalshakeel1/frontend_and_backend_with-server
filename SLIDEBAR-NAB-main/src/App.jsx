import "./App.css";
import Signin from "./signin";
import Signup from "./signup";
import Dashboard from "./dashboard";
// import { Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
