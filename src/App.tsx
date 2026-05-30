import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Platform from "./components/Platform";
import Ecosystem from "./components/Ecosystem";
import Approach from "./components/Approach";
import WhyHard from "./components/WhyHard";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Platform />
        <Ecosystem />
        <Approach />
        <WhyHard />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
