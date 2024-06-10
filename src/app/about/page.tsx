import Navbar from "@/components/Navbar";

// src/pages/about.tsx
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p>This is the about page.</p>
      </div>
    </div>
  );
};

export default About;
