import Layout from "./Layout";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";

export default function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Experience />
      <Projects />
    </Layout>
  );
}
