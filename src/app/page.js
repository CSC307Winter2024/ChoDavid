import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <h1>David Cho</h1>
        <br></br>
        <section>
          <h2>Skills</h2>
          <li>Python</li>
          <li>Java</li>
          <li>Javascript</li>
          <li>C</li>
        </section>
        <section>
          <br></br>
          <h3>Projects</h3>
          <li>Project1</li>
          <li>Project2</li>
          <li>Project3</li>
        </section>
        <section>
          <br></br>
          <h4>Jobs</h4>
          <li>Software Engineering Intern</li>
          <li>IT Intern</li>
        </section>
      </div>
    </main>
  );
}
