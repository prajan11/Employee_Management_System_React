import React from "react";
import "./App.css";
import Department from "./components/Department/Department.js";
import Employee from "./components/Employee/Employee.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="row App mx-auto">
      <div className="col-md-6 Container">
        <span className="ContainerHeader">Department</span>
        <Department />
      </div>
      <div className="col-md-6 Container">
        <span className="ContainerHeader">Employee</span>
        <Employee />
      </div>
    </div>
  );
}

export default App;
