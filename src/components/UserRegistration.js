import React, { useState, useEffect, useContext } from "react";
import { myContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style/registration.css"
function UserRegistration() {
  const navi = useNavigate();
  const { initialValues, formValue, setFormValue, allUser, setAllUser } = useContext(myContext);
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);

  console.log(allUser)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && submit) {
      console.log(formValue);
    }
  }, [formError, formValue, submit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValue);
    setFormError(errors);
    setSubmit(true);

    if (Object.keys(errors).length === 0) {
      setAllUser([...allUser, formValue]);
      navi("/login");
    }
    setFormValue("")
  };

  const validate = (value) => {
    const error = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!value.username) {
      error.username = "user name is required";
    }

    if (!value.email) {
      error.email = "email is required";
    } else if (!regex.test(value.email)) {
      error.email = "not a valid email";
    }

    if (!value.password) {
      error.password = "password is required";
    } else if (value.password.length < 4) {
      error.password = "password must be more than 4 characters";
    }

    return error;
  };

  console.log(formValue);
  return (
    <div className="registration template d-flex justify-content-center align-items-center 100-w vh-100 bg-success">
      <div className="40-w p-3 rounded text-light">
        <form onSubmit={handleSubmit} autoComplete="on"  >
          <h1 style={{ color: "white" }}>REGISTRATION</h1>
          <div className="mb-2">
            <label htmlFor="username">User Name</label>
            <br />
            <input type="text" name="username" placeholder="Name" value={formValue.username} onChange={handleChange} />
          </div>
          <p style={{ color: "darkred" }}>{formError.username}</p>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" placeholder="Email" value={formValue.email} onChange={handleChange} />
          </div>
          <p style={{ color: "darkred" }}>{formError.email}</p>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" placeholder="Password" value={formValue.password} onChange={handleChange}  />
          </div>
          <p style={{ color: "darkred" }}>{formError.password}</p>
          <div className="d-grid">
            <button className="btn btn-primary">Submit</button>
            <br/>
          </div>
        </form>
      </div>
      <div className="adminbtn">
        <Link to='/admin-login'><Button variant="warning">Admin</Button></Link>
      </div>
    </div>
  );
}

export default UserRegistration;
