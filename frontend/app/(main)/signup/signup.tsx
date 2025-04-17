"use client";
import { FormEvent, JSX, useState } from "react";

export const SignUp = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/signup", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Signup success!");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <section
      className="pt-3 mt-5 mb-5 pt-md-5 pt-xl-2 container-fluid"
      id="contact-us"
      style={{ overflowY: "hidden" }}
    >
      <div className="row">
        <div className="col-sm-1 d-none d-sm-block d-md-none"></div>
        <div className="col-sm-10">
          <form onSubmit={handleSubmit} className="form d-md-none">
            <div className="mb-3 form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Richard Johnson"
                name="username"
                required
              />
            </div>
            <div className="mb-3 form-group">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="richardjohnson@example.com"
                name="email"
                required
              />
            </div>
            <div className="mb-3 form-group">
              <label>Password</label>
              <input
                className="form-control"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="******"
                required
              />
              <br />
              <input
                type="checkbox"
                className="form-check-input"
                id="togglePasswords"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label className="ms-1" htmlFor="togglePasswords">
                Show Password
              </label>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="button-black text-center"
                style={{ width: "100%" }}
              >
                Sign Up
              </button>
              <a
                className="button-white d-block mt-3 text-center"
                style={{ width: "100%" }}
                href="https://www.google.com"
              >
                <img
                  alt="some image"
                  src="/Icons/gmail.png"
                  className="d-inline"
                />
                Sign up with Google
              </a>
            </div>
            <p className="mt-3">
              Already have an account?{" "}
              <span>
                <a href="sign-in.html" className="orange-text">
                  Sign in
                </a>
              </span>
            </p>
            <a href="index.html" className="return-button">
              <img alt="some image" src="/Icons/Group33.png" />
            </a>
          </form>
        </div>
      </div>

      <div className="col-sm-1 d-none d-sm-block d-md-none"></div>

      <div className="row container d-none d-md-flex">
        <div className="col-12 col-lg-6 bg-400 container-fluid">
          <div className="form px-sm-5 pt-3 ps-lg-3">
            <h5 className="contact-heading">Welcome!</h5>
            <p className="contact-paragraph">Please enter your details.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Richard Johnson"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="richardjohnson@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="******"
                  required
                />
                <br />
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="togglePassword"
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label className="ms-1" htmlFor="togglePassword">
                  Show Password
                </label>
              </div>
              <button
                type="submit"
                className="button-black mt-3 text-align-center"
              >
                Sign Up
              </button>
              <a
                className="button-white d-block mt-3 text-center"
                href="https://www.google.com"
              >
                <img
                  alt="some image"
                  src="/Icons/gmail.png"
                  className="d-inline"
                />
                Sign up with Google
              </a>
              <p className="mt-3">
                Already have an account?{" "}
                <span>
                  <a href="sign-in.html" className="orange-text">
                    Sign in
                  </a>
                </span>
              </p>
            </form>
            <a href="index.html" className="return-button">
              <img alt="some image" src="/Icons/Group33.png" />
            </a>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-6 bg-400">
          <div className="images">
            <img alt="some image" src="/contact/Group2.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
