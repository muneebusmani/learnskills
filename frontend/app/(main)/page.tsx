export default function HomePage() {
  return (
    <main>
      <div className="padding-block-900">
        <div className="container-fluid">
          <div className="row d-flexs pt-5 pt-md-0">
            <div className="col-md-6 mt-5">
              <h1>
                {" "}
                Learn New Skills <span className="orange-text">.</span> Easily
              </h1>
              <p>
                We give you unlimited access to best courses from best
                specialist to learn thousands of practical lesson in a
                multimedia fields{" "}
              </p>
            </div>
            <div className="col-md-6">
              <img className="header-img" src="/home/header.png" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section className="padding-block-700">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <h1 className="blue-text">100+</h1>
              <p>Fields of study</p>
            </div>
            <div className="col-md-5">
              <h2>Choose what you</h2>
              <h2 className="orange-text">want to learn</h2>
              <p>
                The best specialists from all over the world are waiting to
                share their knowledge with you. Don't put it off for later.
                start right now.
              </p>
            </div>
            <div className="col-md-5">
              <img className="center" src="/home/image-slide.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="padding-block-700">
        <h1 className="text-center">
          Our learning <span className="blue-text">Opportunity</span>{" "}
        </h1>
        <p className="text-center">
          Learn with great courses and best world wide tutor so you can become
          future doctor, engineer and programmer
        </p>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="card bg-400">
                <img className="card-img" src="/Icons/icon-1.png" />
                <div className="card-body card-align">
                  <h3 className="card-title">Online Course</h3>
                  <p>
                    Strategy direct mailing crowdfunding product management
                    Social mediastealth release alpha
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
              <div className="card card-col-2">
                <img className="card-img" src="/Icons/icon-3.png" />
                <div className="card-body card-align">
                  <h3 className="card-title">Expert Tutoring</h3>
                  <p>
                    Strategy direct mailing crowdfunding product management
                    Social mediastealth release alpha
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="card bg-400">
                <img className="card-img" src="/Icons/icon-2.png" />
                <div className="card-body card-align">
                  <h3 className="card-title card-align">Effect Method</h3>
                  <p>
                    Strategy direct mailing crowdfunding product management
                    Social mediastealth release alpha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <div className="container padding-block-700">
          <div className="row d-flexs">
            <div className="col-md-7 mb-4">
              <img src="/home/image-1.png" />
            </div>

            <div className="col-md-5">
              <h3>Best instructor provided</h3>
              <p>
                Instructors from around the world teach millions of students on
                learnskills. We provide the tools and skills to teach what you
                love.
              </p>
              <a href="contact.html" type="button" className="btn button">
                Start Learning Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Companies */}
      <div className="mb-5" id="companies">
        <div className="row d-flexs container">
          <h1 className="text-center">
            Trusted by <span className="orange-text">5,000+</span> companies
            worldwide
          </h1>

          <div className="col-lg-2 col-md-4 col-6  my-4 d-flex justify-content-center">
            <img src="/logos/google.png" />
          </div>

          <div className="col-lg-2 col-md-4 col-6  my-4 d-flex justify-content-center">
            <img src="/logos/netflix.png" />
          </div>

          <div className="col-lg-2 col-md-4 col-6  my-4 d-flex justify-content-center">
            <img src="/logos/airbnb.png" />
          </div>

          <div className="col-lg-2 col-md-4 col-6  my-4 d-flex justify-content-center">
            <img src="/logos/amazon.png" />
          </div>

          <div className="col-lg-2 col-md-4 col-6  my-4 d-flex justify-content-center">
            <img src="/logos/grab.png" />
          </div>

          <div className="col-lg-2 col-md-4 col-6  my-4 d-flex justify-content-center">
            <img src="/logos/grab.png" />
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <section>
        <div className="container padding-block-700">
          <div className="row d-flexs">
            <div className="col-md-9 mb-4">
              <h3>Best instructor provided</h3>
              <p>
                Instructors from around the world teach millions of <br />{" "}
                students on learnskills. We provide the tools and skills <br />{" "}
                to teach what you love.
              </p>
              <a href="course.html" type="button" className="button-blue">
                Start Learning Today
              </a>
            </div>
            <div className="col-md-3">
              <img src="/home/image-2.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="padding-block-700">
        <div className="container padding-top">
          <h3 className="mb-5 fw-bold">Download Price List</h3>
          <div className="row row-cols-auto">
            <div className="col-6 col-lg-3 py-1">
              <h3>Development</h3>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  Python
                </h5>
              </a>
              <h5>6,354,994 students</h5>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  Web Development
                </h5>
              </a>
              <h5>11,415,615 students</h5>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  Machine Learning
                </h5>
              </a>
              <h5>7,070,015 students</h5>
            </div>

            <div className="col-6 col-lg-3 py-1">
              <h3>Business</h3>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  Financial Analysis
                </h5>
              </a>
              <h5>1,195,282 students</h5>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">SQL</h5>
              </a>
              <h5>5,977,561 students</h5>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">PMP</h5>
              </a>
              <h5>1,733,398 students</h5>
            </div>

            <div className="col-6 col-lg-3 py-1">
              <h3>IT and Software</h3>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  AWS Certificate
                </h5>
              </a>
              <h5>6,078,244 students</h5>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  Ethical Hacking
                </h5>
              </a>
              <h5>10,931,066 students</h5>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  Cyber Security
                </h5>
              </a>
              <h5>3,998,037 students</h5>
            </div>

            <div className="col-6 col-lg-3 py-1">
              <h3>Design</h3>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  Photoshop
                </h5>
              </a>
              <h5>6,078,244 students</h5>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  Graphic Design
                </h5>
              </a>
              <h5>10,931,066 students</h5>
              <a href="price-list/price list.pdf" download="Price List">
                <h5 className="orange-text text-decoration-underline">
                  Drawing
                </h5>
              </a>
              <h5>3,998,037 students</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <button
                href="course.html"
                type="button"
                className="btn btn-outline-primary fw-bold my-2 p-2"
              >
                Explore more topics
              </button>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
