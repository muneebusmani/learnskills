import { Poppins, Rambla } from "next/font/google";
import "./style.css";
import Script from "next/script";
import { JSX } from "react";
import { Metadata, Viewport } from "next";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can customize weights
});

const rambla = Rambla({
  variable: "--font-rambla",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Learn Skills | Learn Skill",
  description: "Get the best Professional teacher",
  keywords: ["teacher", "Professional", "online teach"],
  robots: "index, follow",
  icons: {
    icon: "/svg/hat.svg",
  },
  other: {
    "X-UA-Compatible": "IE=edge",
    charset: "UTF-8",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={`${poppins.variable} ${rambla.variable} bg-300`}>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
};

export default RootLayout;
