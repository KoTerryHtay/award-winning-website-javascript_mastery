import Hero from "./components/Hero";
// import Hero1 from "./components/Hero-v1";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      {/* <Hero1 /> */}
      <section className="h-screen z-0 bg-blue-500" />
      {/* <div className="text-5xl font-zentry">App</div>
      <div className="text-5xl special-font">App</div>
      <div className="text-5xl animated-word">App</div>
      <div className="text-5xl ">App</div> */}
    </main>
  );
}
