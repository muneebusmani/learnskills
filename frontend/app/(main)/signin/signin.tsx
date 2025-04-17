"use client";
import { FormEvent, JSX, useState } from "react";

export const SignIn = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/signin", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Signin success!");
    } else {
      alert("Signin failed");
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
          <div className="form d-md-none">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-group">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="richardjohnson@example.com"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="passwords">Password</label>
                <input
                  className="form-control"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="passwords"
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
                  Sign In
                </button>
                <a
                  className="button-white d-block mt-3 text-center"
                  style={{ width: "100%" }}
                  href="https://www.google.com"
                >
                  <img
                    alt="gmail icon"
                    src="/Icons/gmail.png"
                    className="d-inline"
                  />
                  Sign in with Google
                </a>
              </div>
              <p className="mt-3">
                Don’t have an account yet?{" "}
                <span>
                  <a href="signup.html" className="orange-text">
                    Sign up
                  </a>
                </span>
              </p>
              <a href="index.html" className="return-button">
                <img alt="return icon" src="/Icons/Group33.png" />
              </a>
            </form>
          </div>
        </div>
      </div>

      <div className="col-sm-1 d-none d-sm-block d-md-none"></div>

      <div className="row container d-none d-md-flex ">
        <div className="col-12 col-lg-6 bg-400 container-fluid">
          <div className="form px-sm-5 pt-3 ps-lg-3">
            <h5 className="contact-heading">Welcome!</h5>
            <p className="contact-paragraph">Please enter your details.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-2"
                  id="Email"
                  placeholder="richardjohnson@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control mt-2"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
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
                Sign In
              </button>
              <a
                className="button-white d-block mt-3 text-center"
                href="https://www.google.com"
              >
                <img
                  alt="gmail icon"
                  src="/Icons/gmail.png"
                  className="d-inline"
                />
                Sign in with Google
              </a>
              <p className="mt-3">
                Don’t have an account yet?{" "}
                <span>
                  <a href="signup.html" className="orange-text">
                    Sign up
                  </a>
                </span>
              </p>
              <a href="index.html" className="return-button">
                <img alt="return icon" src="/Icons/Group33.png" />
              </a>
            </form>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-6 bg-400">
          <div className="images">
            <img alt="visual" src="/contact/Group2.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
