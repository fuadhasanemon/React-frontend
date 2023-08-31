import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Add = () => {
  const [input, setInput] = useState({
    name: "",
    designation: "",
    skill: "",
    photo: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleDevsForm = (e) => {
    e.preventDefault();

    if (input.name || input.designation || input.skill) {
      axios.post("http://localhost:5050/developer", input).then((res) => {
        setInput({
          name: "",
          designation: "",
          skill: "",
          photo: "",
        });
      });
      navigate("/crud");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All Fields Required!",
        footer: "",
      });
    }
  };

  return (
    <>
      <div className="add-form-page my-5">
        <div className="container">
          <div className="row">
            <h2 className="text-center">Our developers form</h2>
            <div className="back-btn my-3 p-0">
              <Link className="btn btn-primary" to="/crud">
                Go back
              </Link>
            </div>

            <div className="card">
              <div className="card-body">
                <form onSubmit={handleDevsForm} action="" className="mt-5">
                  <div className="my-2">
                    <label htmlFor="">Name</label>
                    <input
                      value={input.name}
                      onChange={handleInputChange}
                      name="name"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="">Designation</label>
                    <input
                      name="designation"
                      value={input.designation}
                      onChange={handleInputChange}
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="">Skill</label>
                    <input
                      name="skill"
                      value={input.skill}
                      onChange={handleInputChange}
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="">Photo</label>
                    <input
                      name="photo"
                      value={input.photo}
                      onChange={handleInputChange}
                      className="form-control"
                      type="text"
                    />
                  </div>

                  <div className="my-2">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
