import { JSX } from "react";
import { Metadata } from "next";
import { CourseDetail } from "./course-detail";

export const metadata: Metadata = {
  title: "Courses",
  description: "Courses Online on Learn Skills",
};

const Page = ({ params }): JSX.Element => <CourseDetail params={params} />;
export default Page;
