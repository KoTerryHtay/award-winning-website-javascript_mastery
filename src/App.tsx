import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Story from "./components/Story";
// import Hero1 from "./components/Hero-v1";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <Hero1 /> */}
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
