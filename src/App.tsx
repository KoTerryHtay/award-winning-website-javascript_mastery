import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
// import Hero1 from "./components/Hero-v1";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <Hero1 /> */}
      <NavBar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}
