import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const Adduser = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    role: "staff",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(FunctionAddUser(userDetails));
    navigate("/user");
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    value={userDetails.name}
                    onChange={handleChange}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    value={userDetails.email}
                    onChange={handleChange}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleChange}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Role</label>
                  <select
                    name="role"
                    value={userDetails.role}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>{" "}
            |
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Adduser;
