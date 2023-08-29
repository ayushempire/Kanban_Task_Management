import React from "react";
import HomeNavbar from "../Screens/HomeNavbar";
import HomePage from "../Screens/HomePage";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div>
        <HomeNavbar />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}
