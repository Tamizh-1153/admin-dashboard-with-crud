import { useUserContext } from "../Components/Content"

const TeacherAddList = () => {
  const { teachers,setTeachers } = useUserContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const mobileNo = e.target.elements.mobileNo.value

    const newTeacher = {
      id: Date.now(),
      name: name,
      email: email,
      mobileNo: mobileNo,
    }

    setTeachers([...teachers, newTeacher])
    e.target.elements.name.value = null
    e.target.elements.email.value = null
    e.target.elements.mobileNo.value = null
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" d-flex flex-wrap flex-md-nowrap m-1 text-center"
    >
      <input
        required
        className="form-control mx-1 my-1 "
        type="text"
        name="name"
        placeholder="Enter Name"
      />
      <input
        required
        className="form-control mx-1 my-1"
        type="text"
        name="email"
        placeholder="Enter Email"
      />
      <input
        required
        className="form-control mx-1 my-1"
        type="tel"
        pattern="[0-9]{10}"
        name="mobileNo"
        placeholder="Enter Mobile number"
      />

      <button type="submit" className="btn btn-primary my-1 ">
        Add
      </button>
    </form>
  )
}

export default TeacherAddList
