import { JSX } from "react";

export const Footer = (): JSX.Element => (
  <footer>
    <div className="container-fluid padding-block-900">
      <div className="row">
        <div className="col-md-6">
          <img
            alt="some image"
            className="footer-center"
            src="/logos/footer-logo.png"
          />
        </div>

        <div className="col-md-3 text-for text-color">
          <a href="index.html">
            <h6>LearnSkills</h6>
          </a>
          <a href="course.html">
            <h6>Course</h6>
          </a>
          <a href="History.html">
            <h6>History</h6>
          </a>
          <a href="contact.html">
            <h6>Contact Us</h6>
          </a>
        </div>

        <div className="col-md-3 text-for text-color">
          <a href="">
            <h6>Careers</h6>
          </a>
          <a href="">
            <h6>Help and Support</h6>
          </a>
          <p className="mt-5">&#169; 2022 LearnSkills Inc.</p>
        </div>
      </div>
    </div>
  </footer>
);
