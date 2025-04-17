import { JSX } from "react";
import { CoursesPage } from "./courses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "Courses Online on Learn Skills",
};

const Page = (): JSX.Element => <CoursesPage />;
export default Page;
