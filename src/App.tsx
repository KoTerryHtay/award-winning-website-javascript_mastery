import About from "./components/About";
import Hero from "./components/Hero";
// import Hero1 from "./components/Hero-v1";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <Hero1 /> */}
      <Hero />
      <About />
    </main>
  );
}
