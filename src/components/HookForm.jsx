// import React from "react";
import { useState } from "react";

const HookForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    setUsers([...users, user]);
    //clears form after submitting info
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container mb-3">
          <label htmlFor="fname" className="form-label">
            First Name:{" "}
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="container mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name:{" "}
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="container mb-3">
          <label htmlFor="email" className="form-label">
            Email Address:{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="container mb-3">
          <label htmlFor="password" className="form-label">
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="container mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password:{" "}
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Create Form
          </button>
        </div>
      </form>

      <div>
        <p>Your Form Data</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default HookForm;
