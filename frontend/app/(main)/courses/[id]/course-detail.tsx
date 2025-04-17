"use client";

import { JSX, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import api from "@/lib/api";
import { Course, Review, RelatedCourse, Instructor } from "@/lib/interfaces";
import axios from "axios";

export const CourseDetail = ({
  params,
}: {
  params: { id: string };
}): JSX.Element => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "language";
  const [course, setCourse] = useState<Course | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [relatedCourses, setRelatedCourses] = useState<RelatedCourse[]>([]);
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseResponse = await api.get(`/courses/${params.id}`);
        setCourse(courseResponse.data);

        const reviewsResponse = await api.get(`/courses/${params.id}/reviews`);
        setReviews(reviewsResponse.data);

        const relatedResponse = await api.get(`/courses?category=${category}`);
        setRelatedCourses(
          relatedResponse.data.filter((c: Course) => c.id !== params.id),
        );

        const instructorIds =
          courseResponse.data.instructors?.map((i: any) => i.id) || [];

        const instructorPromises = instructorIds.map((id: string) =>
          api.get(`/instructors/${id}`),
        );
        const instructorResponses = await Promise.all(instructorPromises);
        setInstructors(instructorResponses.map((res) => res.data));

        setLoading(false);
      } catch (err: unknown) {
        setError("Failed to load course data");
        setLoading(false);

        if (axios.isAxiosError(err) && err.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      }
    };

    fetchData();
  }, [params.id, category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <>
      <header>
        <div className="row container-fluid text-light main-bg">
          <div className="col-sm-2 col-md-3 col-xl-2"></div>
          <div className="col-sm-8 col-md-6 col-xl-7 py-4 my-margin">
            <h2 className="small" style={{ color: "#FF8E3D" }}>
              {course.category ||
                "Development > Programming Languages > Python"}
            </h2>
            <img
              src={course.image || "/courses/Language-Course/3.jpg"}
              alt="Course"
              style={{ width: "30rem" }}
              className="d-none d-sm-block d-xl-none"
            />
            <h2>
              <strong>
                {course.title ||
                  "Learn Python: The Complete Python Programming Course"}
              </strong>
            </h2>
            <h6>
              {course.description || "Learn A-Z everything about Python..."}
            </h6>
            <div className="container-fluid lower-bg">
              <div className="review d-inline-block">
                <h6
                  className="small d-inline-block ratings"
                  style={{ color: "#FF8E3D" }}
                >
                  <strong>{course.rating || "4.2"}</strong>
                </h6>
                {Array(Math.floor(course.rating || 4))
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      src="/svg/star-fill.svg"
                      alt="star-fill"
                      className="staricon"
                    />
                  ))}
                {course.rating % 1 !== 0 && (
                  <img
                    src="/svg/star.svg"
                    alt="star-half"
                    className="staricon"
                  />
                )}
              </div>
              <h6>
                ({course.rating_count || "2,152"} ratings){" "}
                {course.student_count || "12,674"} students
              </h6>
              <h6>
                Created by{" "}
                {instructors.map((instructor, index) => (
                  <span key={instructor.id}>
                    <a>{instructor.name || "Tony Scott"}</a>
                    {index < instructors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </h6>
              <i className="bi bi-exclamation-octagon bi-2x"></i>
              <h6 className="small d-inline">
                Last updated {course.last_updated || "09/2015"}
              </h6>
              <i className="bi bi-globe"></i>
              <h6 className="small d-inline">{course.language || "English"}</h6>
              <i className="bi bi-card-text"></i>
              <h6 className="small d-inline">
                {course.subtitle_language || "English"}
              </h6>
              <button
                className="btn btn-primary d-block mt-3 d-sm-block d-xl-none"
                style={{ width: "30%" }}
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="d-none d-xl-inline-block col-xl-3">
            <div
              className="card buynow bg-dark text-light top"
              style={{ margin: 0, padding: 0, position: "fixed", zIndex: 1 }}
            >
              <img
                src={course.image || "/courses/Language-Course/3.jpg"}
                alt="lorem-picsum"
                className="card-img-top"
                style={{ height: "10rem" }}
              />
              <div className="card-body">
                <h3 className="card-title">${course.price || "84.99"}</h3>
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  Buy Now
                </button>
                <p className="text-muted text-center my-4">
                  30-day Money-Back Guarantee
                </p>
              </div>
              <p>
                <h1 className="fw-bold small ps-4">This Course Includes</h1>
                <h1 className="small ps-4">
                  <img
                    src="/svg/video.svg"
                    alt="video"
                    className="d-inline-block fileicon"
                  />{" "}
                  {course.video_hours || "14 hours"} on-demand video
                </h1>
                <h1 className="small ps-4">
                  <img
                    src="/svg/video.svg"
                    alt="video"
                    className="d-inline-block fileicon"
                  />{" "}
                  {course.articles || "1"} article
                </h1>
                <h1 className="small ps-4">
                  <img
                    src="/svg/video.svg"
                    alt="video"
                    className="d-inline-block fileicon"
                  />{" "}
                  {course.resources || "3"} downloadable resources
                </h1>
                <h1 className="small ps-4">
                  <img
                    src="/svg/video.svg"
                    alt="video"
                    className="d-inline-block fileicon"
                  />{" "}
                  Full lifetime access
                </h1>
                <h1 className="small ps-4">
                  <img
                    src="/svg/video.svg"
                    alt="video"
                    className="d-inline-block fileicon"
                  />{" "}
                  Access on mobile and TV
                </h1>
                <h1 className="small ps-4">
                  <img
                    src="/svg/video.svg"
                    alt="video"
                    className="d-inline-block fileicon"
                  />{" "}
                  Certificate of completion
                </h1>
              </p>
            </div>
          </div>
          <div className="col-sm-2 col-md-3 d-block d-xl-none"></div>
        </div>
      </header>
      <section>
        <div className="container-fluid">
          <div className="row courses">
            <div className="d-md-inline-block col-md-1 col-lg-2 col-md-1 col-xl-2"></div>
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 text-light">
              <div className="learning my-5 py-4">
                <h3 className="ms-5 pb-1 text-start">
                  <strong>What you'll learn</strong>
                </h3>
                {(
                  course.learning_objectives || [
                    "Create their own Python Programs",
                    "Become an experienced Python Programmer",
                    "Parse the Web and Create their own Games",
                  ]
                ).map((objective: string, index: number) => (
                  <h1 key={index} className="small d-inline-block ms-5 me-5">
                    <img
                      src="/svg/tick.svg"
                      alt="tick"
                      className="tick me-1 text-start d-inline-block"
                    />{" "}
                    {objective}
                  </h1>
                ))}
              </div>
              <h3 className="mb-4">
                <strong>Course content</strong>
              </h3>
              <h3 className="small d-inline-block">
                {course.sections?.length || "15"} sections •{" "}
                {course.lectures || "146"} lectures •{" "}
                {course.total_length || "14h 42m"} total length
              </h3>
              <br />
              <br />
              <div
                className="accordion accordion-flush text-light"
                id="CollapseAll"
              >
                {(
                  course.sections || [
                    {
                      title: "Up and Running With Python",
                      lectures: [
                        { title: "Installing Python", duration: "04:07" },
                        { title: "Hello World", duration: "01:37" },
                      ],
                      total_duration: "6min",
                      lecture_count: 2,
                    },
                  ]
                ).map((section: any, index: number) => (
                  <div
                    key={index}
                    className="accordion-item bg-dark text-light"
                  >
                    <h2
                      className="accordion-header bg-dark text-white"
                      id={`heading${index}`}
                    >
                      <button
                        className={`accordion-button content bg-dark text-white ${
                          index === 0 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        <strong>{section.title}</strong>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={`heading${index}`}
                    >
                      <div className="accordion-body">
                        <h6 className="small text-start">
                          {section.lecture_count} lectures •{" "}
                          {section.total_duration}
                        </h6>
                        {section.lectures.map(
                          (lecture: any, lecIndex: number) => (
                            <div key={lecIndex}>
                              <img
                                src={
                                  lecture.type === "file"
                                    ? "/svg/file.svg"
                                    : "/svg/play.svg"
                                }
                                alt={lecture.type === "file" ? "file" : "play"}
                                className="playicon d-inline-block me-3"
                              />
                              <h6 className="small d-inline-block text-start">
                                {lecture.title}
                              </h6>
                              <h6 className="small text-end fw-light d-inline-block">
                                {lecture.duration || lecture.pages}
                              </h6>
                              <br />
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="container-fluid my-5">
                <div className="requirements">
                  <h3 className="mb-3">
                    <strong>Requirements</strong>
                  </h3>
                  <ul>
                    {(
                      course.requirements || [
                        "Macintosh (OSX)/ Windows(Vista and higher) Machine",
                        "Internet Connection",
                      ]
                    ).map((req: string, index: number) => (
                      <li key={index} className={index === 1 ? "mb-5" : ""}>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="description">
                  <h3>
                    <strong>Description</strong>
                  </h3>
                  <article>
                    <p>
                      <b>
                        {course.description_headline ||
                          "Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?"}
                      </b>
                    </p>
                    <p>
                      {course.description_intro ||
                        "If you're looking to learn Python for the very first time or need a quick brush-up, this is the course for you!"}
                    </p>
                  </article>
                </div>
              </div>
              <div className="container-fluid">
                <h3>
                  <strong>Students also Bought</strong>
                </h3>
                {relatedCourses.map((related: RelatedCourse, index) => (
                  <a
                    key={index}
                    href={`/courses/${related.id}?category=${category}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div className="container-fluid my-3 bought">
                      <div className="d-inline-block text-break content-bought">
                        <div className="d-inline-block">
                          <div className="d-none d-md-inline-block">
                            <img
                              className="d-inline-block icon"
                              src={related.image || `/courses/${index + 2}.jpg`}
                              alt="course-1"
                            />
                          </div>
                          <div className="text-bought d-inline-block">
                            <h3 className="small d-inline-block mx-2 mx-lg-0 mx-xl-3">
                              <strong>
                                {related.title ||
                                  "Learn JavaScript - Complete Course"}
                              </strong>
                            </h3>
                            <h3 className="small d-inline-block mx-2 mx-lg-3 mx-xl-4 text-bought-1">
                              <strong>{related.rating || "4.3"}</strong>
                              <img
                                src="/svg/star-fill.svg"
                                alt="star-fill"
                                className="staricon"
                              />
                            </h3>
                            <h3 className="small d-inline-block text-bought-3">
                              <img
                                src="/svg/people.svg"
                                alt="people"
                                className="peopleicon pic-bought-1"
                              />
                              <strong>
                                {related.student_count || "9,159"}
                              </strong>
                            </h3>
                            <h3 className="small d-inline-block mx-2 mx-lg-3 mx-xl-3 text-bought-2">
                              <strong>${related.price || "85.99"}</strong>
                            </h3>
                          </div>
                          <a href="#" className="d-none d-lg-inline-block ms-3">
                            <img
                              src="/svg/favorite.svg"
                              alt="favorite"
                              className="favoriteicon"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="container-fluid my-5 instructor-description clearfix">
                <h3>
                  <strong>Instructors</strong>
                </h3>
                <br />
                {instructors.map((instructor: Instructor, index) => (
                  <div key={index} className={`instructor-${index + 1}`}>
                    <a
                      href="#"
                      style={{ color: "#FF8E3D", textDecoration: "none" }}
                    >
                      <h6>
                        <strong>
                          {instructor.name ||
                            (index === 0 ? "Tony Scott" : "LearnSkills.com")}
                        </strong>
                      </h6>
                    </a>
                    <div>
                      <h6 className="fw-lighter">
                        {instructor.title ||
                          (index === 0
                            ? "CEO of LearnSkills.com - Teaching 500,000+ Students how to code"
                            : "Teaching Computer Courses Through Projects")}
                      </h6>
                      <div className="d-inline-block float-start my-3">
                        <img
                          src={
                            instructor.image ||
                            `/faculty-page/Group${27 + index}.png`
                          }
                          alt="faculty"
                          style={{ width: "8rem", height: "8rem" }}
                        />
                      </div>
                      <div className="my-5">
                        <div className="d-inline-block">
                          <img
                            src="/svg/star-white.svg"
                            alt="certificate"
                            className="fileicon d-inline-block"
                          />{" "}
                          <h3 className="small d-inline-block">
                            {instructor.rating || "4.3"} instructor Rating
                          </h3>
                        </div>
                        <br />
                        <div className="d-inline-block">
                          <img
                            src="/svg/certificate.svg"
                            alt="certificate"
                            className="fileicon d-inline-block"
                          />{" "}
                          <h3 className="small d-inline-block">
                            {instructor.reviews || "76,503"} Reviews
                          </h3>
                        </div>
                        <br />
                        <div className="d-inline-block">
                          <img
                            src="/svg/people.svg"
                            alt="certificate"
                            className="fileicon d-inline-block"
                          />{" "}
                          <h3 className="small d-inline-block">
                            {instructor.students || "930,661"} Students
                          </h3>
                        </div>
                        <br />
                        <div className="d-inline-block">
                          <img
                            src="/svg/play.svg"
                            alt="certificate"
                            className="fileicon d-inline-block"
                          />{" "}
                          <h3 className="small d-inline-block">
                            {instructor.courses || "16"} Courses
                          </h3>
                        </div>
                      </div>
                      <article>
                        <p>
                          {instructor.bio ||
                            "Tony Scott is currently a senior at UC Berkeley..."}
                        </p>
                      </article>
                    </div>
                  </div>
                ))}
              </div>
              <div className="container-fluid">
                <h3>
                  <strong>Reviews</strong> ({reviews.length || "4k"})
                </h3>
                <br />
                <br />
                <div className="row">
                  {reviews.slice(0, 4).map((review: Review, index: number) => (
                    <div
                      key={index}
                      className="col-lg-5 clearfix"
                      style={{
                        borderTop: "2px solid #747474",
                        paddingBottom: "1rem",
                        paddingTop: "1rem",
                      }}
                    >
                      <img
                        src="/svg/default-pic.svg"
                        alt="default-pic"
                        className="icon float-start"
                      />
                      <h6 className="d-inline-block ms-3 float-start">
                        <strong>
                          {review.user_name ||
                            (index % 2 === 0
                              ? "Phillip Thomas"
                              : "Sharon Griffin")}
                        </strong>
                        <br />
                        {Array(Math.floor(review.rating || 4))
                          .fill(0)
                          .map((_, i) => (
                            <img
                              key={i}
                              src="/svg/star-fill.svg"
                              alt="star-fill"
                              className="staricon mt-3"
                            />
                          ))}
                        {review.rating % 1 !== 0 && (
                          <img
                            src="/svg/star.svg"
                            alt="star-half"
                            className="staricon mt-3"
                          />
                        )}
                      </h6>
                      <h6
                        className="fw-lighter d-inline-block"
                        style={{ paddingTop: "2rem", paddingLeft: "0.5rem" }}
                      >
                        {review.created_at ||
                          (index % 2 === 0 ? "a week ago" : "a month ago")}
                      </h6>
                      <br />
                      <br />
                      <h6 className="small">
                        {review.comment || "Yes it was a good match..."}
                      </h6>
                    </div>
                  ))}
                  {reviews.length > 0 && <div className="col-lg-1"></div>}
                </div>
                <button type="button" className="btn btn-outline-light">
                  Show all Reviews
                </button>
              </div>
            </div>
            <div className="d-md-inline-block col-lg-2 col-xl-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};
