import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Sherzodbek Akhmadjonov, his background, interests and current pursuits.",
};

/**
 * About page providing a personal overview. Feel free to expand upon this
 * section with more details, images or timeline entries as your story
 * evolves.
 */
export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 space-y-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="leading-7 text-muted-foreground">
        I'm Sherzodbek, a Business Informatics student at the University of Debrecen with strong interests in Data Analysis, Business Intelligence, Web Development, and Digital Innovation.
      </p>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What I’m into</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>🔎 Experienced in Python, Pandas, Matplotlib, Seaborn for Data Analytics</li>
          <li>🧠 Skilled with React.js, HTML5, CSS3, Firebase for Front-End projects</li>
          <li>📊 Learning and applying Power BI and AWS Cloud fundamentals</li>
          <li>🌱 Always improving and expanding my technical and analytical skills</li>
          <li>🏗️ Building practical projects and sharing my journey through GitHub and LinkedIn</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Technologies and Skills</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Python, Pandas, Matplotlib, Seaborn, Scipy, Prophet, LLMs</li>
          <li>Power BI, SQL, PL/SQL, SAS, SAP</li>
          <li>HTML5, CSS3, React.js, Firebase</li>
          <li>Git, GitHub</li>
          <li>AWS (basic cloud concepts)</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Currently</h2>
        <p className="leading-7 text-muted-foreground">
          I’m focused on strengthening Data Analytics and Visualization skills, building real-world projects in Python, Pandas, Power BI, exploring cloud technologies and business process improvement.
        </p>
        <p className="leading-7 text-muted-foreground">
          Thanks for visiting my GitHub profile! 🚀 Feel free to check out my projects or connect with me on LinkedIn!
        </p>
      </section>
    </div>
  );
}