import { JSX } from "react";
import { SignIn } from "./signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Skills | Sign In",
};
const Page = (): JSX.Element => <SignIn />;
export default Page;
