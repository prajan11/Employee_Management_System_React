import React, { Component } from "react";
import "./Department.css";

class Department extends Component {
  state = {};
  render() {
    return (
      <div className="s">
        <div className="DepartmentFormContainer mt-4">
          <div className="DepHeadings">
            <h6>Add Department</h6>
          </div>
          <div className="DepFormSection">
            <label className="m-0 p-0 d-block text-left">
              <small className="font-weight-bold">Department Name</small>
            </label>
            <div className="input-group">
              <label></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter department name"
              />
            </div>
            <div className="input-group mt-4">
              <button type="button" className="form-control btn btn-primary">
                <i className="fas fa-plus"></i> Submit
              </button>
            </div>
          </div>
        </div>
        <div className="tableContainer">
          <div className="DepHeadings">
            <h6>List of Departments</h6>
          </div>
          <div className="DepTableSection">
            <div className="input-group mb-3 mt-2 w-50">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Department"
              />
            </div>

            <table className="table table-hover table-bordered">
              <tr>
                <th>ID</th>
                <th>Department</th>
                <th>Action</th>
              </tr>

              <tr>
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

export default Department;
