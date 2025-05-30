import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import QuickBuilds from "../components/QuickBuilds";
import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <QuickBuilds />
      <Contacts />
      <Footer />
    </>
  );
}
