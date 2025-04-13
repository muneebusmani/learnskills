"use client";
import { JSX, useEffect } from "react";
import { Navbar } from "../components/navbar";
import "./style.css";
import Head from "next/head";
import { Footer } from "../components/footer";
const Signup = (): JSX.Element => {
  useEffect(() => {
    const togglePassword = document.getElementById(
      "togglePassword",
    ) as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    if (togglePassword && password) {
      const handleToggle = () => {
        password.type = password.type === "password" ? "text" : "password";
      };

      togglePassword.addEventListener("click", handleToggle);

      return () => {
        togglePassword.removeEventListener("click", handleToggle);
      };
    }
  }, []);
  return (
    <>
      <Head>
        <title>Learn Skills | Sign Up</title>
      </Head>
      <Navbar />
      <section
        className="pt-3 mt-5 mb-5 pt-md-5 pt-xl-2 container-fluid"
        id="contact-us"
        style={{ overflowY: "hidden" }}
      >
        <div className="row">
          <div className="col-sm-1 d-none d-sm-block d-md-none"></div>
          <div className="col-sm-10">
            <div className="form d-md-none">
              <div className="mb-3 form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Richard Johnson"
                  id="Usermane"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="richardjohnson@example.com"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="passwords"
                  aria-describedby="Password"
                  placeholder="******"
                />
                <br />
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="togglePasswords"
                />
                <label className="ms-1" htmlFor="togglePasswords">
                  Show Password
                </label>
              </div>
              <div className="form-group">
                <button
                  className="button-black text-center"
                  style={{ width: "100%" }}
                >
                  Sign Up
                </button>
                <a
                  type="submit"
                  className=" button-white d-block mt-3 text-center"
                  style={{ width: "100%" }}
                  href="https://www.google.com"
                >
                  <img
                    alt="some image"
                    src="/Icons/gmail.png"
                    className="d-inline"
                  />
                  Sign up with google
                </a>
              </div>
              <p className="mt-3">
                Already have an account?{" "}
                <span>
                  <a href="sign-in.html" className="orange-text">
                    Sign in
                  </a>{" "}
                </span>
              </p>
              <a href="index.html" className="return-button">
                <img alt="some image" src="/Icons/Group33.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-1 d-none d-sm-block d-md-none"></div>
        <div className="row container d-none d-md-flex ">
          <div className="col-12 col-lg-6 bg-400 container-fluid">
            <div className="form px-sm-5 pt-3 ps-lg-3">
              <h5 className="contact-heading">Welcome!</h5>
              <p className="contact-paragraph">Please enter your details.</p>
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputEmail1">Username</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Username"
                    aria-describedby="Username"
                    placeholder="Richard Johnson"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    aria-describedby="Email"
                    placeholder="richardjohnson@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    aria-describedby="Password"
                    placeholder="******"
                  />
                  <br />
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="togglePassword"
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
                  type="submit"
                  className=" button-white d-block mt-3 text-center"
                  href="https://www.google.com"
                >
                  <img
                    alt="some image"
                    src="/Icons/gmail.png"
                    className="d-inline"
                  />
                  Sign up with google
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
              <img alt="some image" src="/contact/Group 2.png" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Signup;
