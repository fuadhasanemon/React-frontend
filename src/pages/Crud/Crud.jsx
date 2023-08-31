import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidShow } from "react-icons/bi";
import Header from "../../components/Header/Header";
import "./crud.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Crud = () => {
  const [developers, setDevelopers] = useState([]);

  const handleDevDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5050/developer/${id}`).then((res) => {
          setDevelopers(developers.filter((data) => data.id !== id));
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5050/developer?_sort=id&_order=desc")
      .then((res) => {
        setDevelopers(res.data);
      });
  }, [setDevelopers]);

  return (
    <>
      <Header />

      <div className="crud-page">
        <div className="container">
          <div className="row">
            <h2 className="mt-5 mb-3">Our developers</h2>

            <Link className="btn btn-primary my-3 add_new_dev_btn" to="/create">
              Add new developer
            </Link>

            <div className="card p-5">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Skill</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {developers.map((devs, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{devs.name}</td>
                      <td>{devs.designation}</td>
                      <td>{devs.skill}</td>
                      <td className="developers_photo">
                        <img src={devs.photo} alt="" />
                      </td>
                      <td>
                        <div className="button-group">
                          <button className="btn btn-info me-2">
                            <AiFillEdit />
                          </button>
                          <button
                            onClick={() => handleDevDelete(devs.id)}
                            className="btn btn-danger me-2"
                          >
                            <BsFillTrashFill />
                          </button>
                          <button className="btn btn-primary">
                            <BiSolidShow />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud;
