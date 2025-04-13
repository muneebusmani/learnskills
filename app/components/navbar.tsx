import Link from "next/link";
import { JSX } from "react";

export const Navbar = (): JSX.Element => (
  <header>
    <nav className="navbar navbar-expand-lg bg-black fixed-top">
      <div className="container-fluid padding-left-right">
        <Link className="navbar-brand d-block d-sm-none" href="/">
          <img src="/logos/logo-header-sm.png" alt="logo-header-sm" />
        </Link>
        <Link className="navbar-brand d-none d-sm-block" href="/">
          <img src="/logos/logo-header.png" alt="logo-header" />
        </Link>
        <button
          className="navbar-toggler bg-black"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <img src="/svg/hamburger.svg" alt="hamburger" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item cool-link">
              <Link
                className="nav-link text-primary-white cool-link-active"
                aria-current="page"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown cool-link">
              <Link
                className="nav-link dropdown-toggle text-primary-white"
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Course
              </Link>
              <ul className="dropdown-menu">
                <li className="cool-link">
                  <Link className="dropdown-item" href="/language-course">
                    Language Course
                  </Link>
                </li>
                <li className="cool-link">
                  <Link className="dropdown-item" href="/individual-course">
                    Individual Course
                  </Link>
                </li>
                <li className="cool-link">
                  <Link className="dropdown-item" href="/collage-course">
                    Collage Course
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="cool-link">
                  <Link className="dropdown-item" href="/course">
                    Package Course
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item cool-link">
              <Link className="nav-link text-primary-white" href="/faculty">
                Faculty
              </Link>
            </li>
            <li className="nav-item cool-link">
              <Link className="nav-link text-primary-white" href="/history">
                History
              </Link>
            </li>
            <li className="nav-item cool-link">
              <Link className="nav-link text-primary-white" href="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item cool-link d-lg-none">
              <Link
                className="nav-link text-primary-white"
                href="/signin"
                type="submit"
              >
                Sign In / Sign Up
              </Link>
            </li>
          </ul>
          <Link
            className="button my-5 my-lg-0 ms-lg-4 d-none d-lg-flex"
            href="/signin"
            type="submit"
          >
            Sign In / Sign Up
          </Link>
        </div>
      </div>
    </nav>
  </header>
);
