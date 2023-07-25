import React from "react"

import StudentAddList from "../Pages/StudentAddList"
import { Link, useNavigate } from "react-router-dom"
import StudentEditList from "../Pages/StudentEditList"
import { useUserContext } from "./Content"

const StudentListing = () => {
  const { students } = useUserContext()

  let refresh = useNavigate()

  const handleDelete = (student) => {
    const deletedStudent = students.indexOf(student)

    students.splice(deletedStudent, 1)
    refresh("/students")
  }

  return (
    <div className="container">
      <div className="card w-100">
        <div className="card-title">
          <h2 className="text-center mx-4 mt-4 mb-1">Students</h2>
        </div>
        <div className="card-body">
          <StudentAddList />
          <table
            style={{ width: "100%" }}
            className="table table-bordered table-hover align-middle table-responsive-sm my-3"
          >
            <thead className="bg-dark text-white">
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile.No</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="align-content-center">{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.mobileNo}</td>
                  <td>
                    <Link to={`/students/Read/${student.id}`}>
                      <button className="btn btn-success">
                        <i className="fa-regular fa-eye"></i>
                      </button>
                    </Link>
                    <Link to={`/students/EditList/${student.id}`}>
                      <button
                        className="btn btn-secondary m-1"
                        onClick={() => <StudentEditList />}
                      >
                        Edit
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger m-1"
                      onClick={() => handleDelete(student)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentListing
