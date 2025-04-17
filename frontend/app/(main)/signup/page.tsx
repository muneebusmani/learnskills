import { SignUp } from "./signup";
import { JSX } from "react";
import { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "Learn Skills | Sign In",
};
const Page = (): JSX.Element => <SignUp />;
export default Page;
