import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useUserContext } from "../Components/Content"

const StudentEditList = () => {
  const { id } = useParams()
  
  const { students,setStudents } = useUserContext()
  const edit = students.find((item) => item.id === Number(id))

  let refresh=useNavigate()


  const handleUpdate = (e) => {
    e.preventDefault()

    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const mobileNo = e.target.elements.mobileNo.value

    const updatedStudent = students.map((student) =>
      student.id === Number(id) ? { ...student, id:id,name:name,email:email,mobileNo:mobileNo } : student
    )
    
    setStudents(updatedStudent);
    refresh('/students')
  }

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        className="d-flex flex-column align-items-center"
      >
        <input
        required
          style={{ width: "50%" }}
          className="form-control my-2 "
          type="text"
          name="name"
          defaultValue={edit.name}
        />
        <input
        required
          style={{ width: "50%" }}
          className="form-control my-2"
          type="text"
          name="email"
          defaultValue={edit.email}
        />
        <input
        required
          style={{ width: "50%" }}
          className="form-control my-2"
          type="tel"
          pattern="[0-9]{10}"
          name="mobileNo"
          defaultValue={edit.mobileNo}
        />
        <button type="submit" className="btn btn-primary py-1">
          Update
        </button>
      </form>
    </div>
  )
}

export default StudentEditList
