import React, { useState } from "react";

function EmployeeList() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState([]);
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      mobile,
      designation,
      gender,
      course,
      image,
    });
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <h1>Create Employee</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="mobile">Mobile No:</label>
        <input
          type="number"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <label htmlFor="designation">Designation:</label>
        <select
          id="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        >
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>

        <label htmlFor="gender">Gender:</label>
        <div className="gender-inputs">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        <label>Courses:</label>
        <div className="course-inputs">
          <label>
            <input
              type="checkbox"
              name="course"
              value="MCA"
              checked={course.includes("MCA")}
              onChange={(e) =>
                setCourse((prevState) =>
                  prevState.includes(e.target.value)
                    ? prevState.filter((val) => val !== e.target.value)
                    : [...prevState, e.target.value]
                )
              }
            />
            MCA
          </label>
          <label>
            <input
              type="checkbox"
              name="course"
              value="BCA"
              checked={course.includes("BCA")}
              onChange={(e) =>
                setCourse((prevState) =>
                  prevState.includes(e.target.value)
                    ? prevState.filter((val) => val !== e.target.value)
                    : [...prevState, e.target.value]
                )
              }
            />
            BCA
          </label>
          <label>
            <input
              type="checkbox"
              name="course"
              value="BSC"
              checked={course.includes("BSC")}
              onChange={(e) =>
                setCourse((prevState) =>
                  prevState.includes(e.target.value)
                    ? prevState.filter((val) => val !== e.target.value)
                    : [...prevState, e.target.value]
                )
              }
            />
            BSC
            </label>    
            </div>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" onChange={handleImageChange} />

            <button type="submit">Submit</button>
            </form>

            {image && (
               <div className="preview">
                <img src={image} alt="Preview" />
               </div>
               )}
        </div>
         );
        }  
        export default EmployeeList;


