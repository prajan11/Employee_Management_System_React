import React, { Component } from "react";
import "./Employee.css";

class Employee extends Component {
  state = {};
  render() {
    return (
      <div className="s">
        <div className="EmployeeFormContainer mt-4">
          <div className="EmpHeadings">
            <h6>Add Employee</h6>
          </div>
          <div className="EmpFormSection">
            <label className="m-0 p-0 d-block text-left">
              <small className="font-weight-bold">Full Name</small>
            </label>
            <div className="input-group">
              <label></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter department name"
              />
            </div>

            <label className="m-0 p-0 d-block text-left">
              <small className="font-weight-bold">Address</small>
            </label>
            <div className="input-group">
              <label></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter address"
              />
            </div>
            <label className="m-0 p-0 d-block text-left">
              <small className="font-weight-bold">Phone/Mobile</small>
            </label>
            <div className="input-group">
              <label></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone/mobile number"
              />
            </div>
            <label className="m-0 p-0 d-block text-left">
              <small className="font-weight-bold">Assign Department</small>
            </label>
            <div className="input-group">
              <label></label>
              <select className="form-control">
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            <div className="input-group mt-4">
              <button type="button" className="form-control btn btn-primary">
                <i className="fas fa-plus"></i> Submit
              </button>
            </div>
          </div>
        </div>
        <div className="tableContainer">
          <div className="EmpHeadings">
            <h6>List of Employees</h6>
          </div>
          <div className="EmpTableSection">
            <div className="input-group mb-3 mt-2 w-50">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Employee"
              />
            </div>

            <table className="table table-hover table-bordered">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Department</th>
                <th>Action</th>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-success"
                    title="Edit"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger ml-1"
                    title="Delete"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
