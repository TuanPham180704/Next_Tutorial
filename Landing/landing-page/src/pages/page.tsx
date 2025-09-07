import React from "react";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function PageMain() {
  return (
    <div className="text-center space-y-8 p-6">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
