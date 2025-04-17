"use client";

import { JSX, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import api from "@/lib/api";
import { Course, Category } from "@/lib/interfaces";
import axios from "axios";

export const CoursesPage = (): JSX.Element => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "language";
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await api.get("/courses?category=language");
        setCourses(coursesResponse.data);

        const categoriesResponse = await api.get("/categories");
        setCategories(categoriesResponse.data);

        setLoading(false);
      } catch (err: unknown) {
        setError("Failed to load data");
        setLoading(false);

        if (axios.isAxiosError(err) && err.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      }
    };

    fetchData();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const renderCourseGroup = (
    start: number,
    end: number,
    hideClasses: string[] = [],
  ) =>
    courses.slice(start, end).map((course, index) => (
      <div
        key={index}
        className={`col-xl-3 col-lg-4 col-sm-6 text-for ${hideClasses[index] || ""}`}
      >
        <a href={`/courses/${course.id}?category=${category}`}>
          <div className="card bg-dark" style={{ width: "100%" }}>
            <img
              src={course.image}
              className="card-img-top"
              alt={`card-${start + index + 1}`}
            />
            <div className="card-body p-3">
              <p
                className="card-text fw-bold"
                dangerouslySetInnerHTML={{ __html: course.title }}
              />
              <p className="card-text small fw-lighter">
                Instructors:{" "}
                {course.instructors?.map((i) => i.name).join(", ") ||
                  "Tony Scott, Learn Skills"}
              </p>
              <div className="review d-inline-block">
                <h6 className="small d-inline-block ratings text-secondary-orange fw-bold">
                  {course.rating || "4.2"}
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
                    className="staricon text-secondary-orange"
                  />
                )}
                <p className="text-secondary-orange fw-bold">
                  ${course.price || "84.99"}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    ));

  return (
    <>
      <section className="bg-300">
        <div className="container-fluid padding-block-900">
          <div className="row d-flexs pt-5 pt-md-0">
            <div className="col-md-6 mt-5">
              <div className="header-text">
                <h1>
                  Learn Skills<span className="orange-text"> Courses</span>
                </h1>
                <p>
                  LearnSkills has a wide network of offering IT courses for
                  everyone from a beginner.
                </p>
              </div>
            </div>
            <div className="col-md-6 header-img ps-5">
              <img src="/courses/Group31.png" alt="Header" />
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid text-center">
        <h1>
          Learn Skills
          <span className="orange-text">Courses</span>
        </h1>
      </div>
      <br />
      <br />
      <div className="row container">
        {renderCourseGroup(0, 4, [
          "",
          "d-none d-sm-block",
          "d-none d-lg-block",
          "d-none d-xl-block",
        ])}
      </div>
      <br />
      <div className="row container">
        {renderCourseGroup(4, 8, [
          "",
          "d-none d-sm-block",
          "d-none d-lg-block",
          "d-none d-xl-block",
        ])}
      </div>
      <br />
      <div className="row container">
        {renderCourseGroup(8, 12, [
          "",
          "d-none d-sm-block",
          "d-none d-lg-block",
          "d-none d-xl-block",
        ])}
      </div>
      <br />
      <br />
      <div className="row container">
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <button className="button" style={{ width: "100%" }} type="button">
            Explore More
          </button>
        </div>
      </div>

      <section className="padding-block-700">
        <div className="container padding-top">
          <h3 className="mb-5 fw-bold">Download Price List</h3>
          <div className="row row-cols-auto">
            {(categories.length > 0
              ? categories
              : [
                  {
                    title: "Development",
                    items: [
                      { name: "Python", students: "6,354,994" },
                      { name: "Web Development", students: "11,415,615" },
                      { name: "Machine Learning", students: "7,070,015" },
                    ],
                  },
                  {
                    title: "Business",
                    items: [
                      { name: "Financial Analysis", students: "1,195,282" },
                      { name: "SQL", students: "5,977,561" },
                      { name: "PMP", students: "1,733,398" },
                    ],
                  },
                  {
                    title: "IT and Software",
                    items: [
                      { name: "AWS Certificate", students: "6,078,244" },
                      { name: "Ethical Hacking", students: "10,931,066" },
                      { name: "Cyber Security", students: "3,998,037" },
                    ],
                  },
                  {
                    title: "Design",
                    items: [
                      { name: "Photoshop", students: "6,078,244" },
                      { name: "Graphic Design", students: "10,931,066" },
                      { name: "Drawing", students: "3,998,037" },
                    ],
                  },
                ]
            ).map((category, index) => (
              <div key={index} className="col-6 col-lg-3 py-1">
                <h3>{category.title}</h3>
                {category.items.map((item, i) => (
                  <div key={i}>
                    <a href="price-list/price list.pdf" download="Price List">
                      <h5 className="orange-text text-decoration-underline">
                        {item.name}
                      </h5>
                    </a>
                    <h5>{item.students} students</h5>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-3">
              <a
                href="/courses"
                type="button"
                className="btn btn-outline-primary fw-bold my-2 p-2"
              >
                Explore more topics
              </a>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};
