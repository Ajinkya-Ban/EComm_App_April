import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container py-4">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-md-6 text-center">
            <img
              src="/images/login.jpg"
              alt="Login"
              className="img-fluid rounded"
            />
          </div>

          {/* Right Side: Login Form */}
          <div className="col-md-6 myloginBox">
            <h2 className="mb-4">Reset Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter Answer</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter favorite sports name"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </form>
            <p className="mt-3">
              Don't have an account? <a href="/register">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
