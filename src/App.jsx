import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const featuresData = [
  {
    title: "Cloud & Infra",
    desc: "Design and manage scalable cloud infrastructure.",
  },
  {
    title: "Product Engineering",
    desc: "End-to-end product development from discovery to delivery.",
  },
  {
    title: "AI & Automation",
    desc: "ML models and automation to accelerate business processes.",
  },
  {
    title: "UX & Design",
    desc: "User-centered design to increase conversion and retention.",
  },
  {
    title: "Data & Analytics",
    desc: "Build data platforms and dashboards for insight-driven decisions.",
  },
  {
    title: "Security",
    desc: "Secure-by-design approach and continuous compliance.",
  },
];

export default function App() {
  return (
    <div>
      <Header company="lopartech" />
      <main>
        <Hero title="lopartech" />
        <Features items={featuresData} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
