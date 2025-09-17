import React from "react";
import { DashboardProvider } from "./Context/DashboardContext";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default App;
