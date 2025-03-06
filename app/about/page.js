// "use client";
import Link from "next/link";

function Card({ name }) {
  return <h4>{`Hi welcome to the child ${name}`}</h4>;
}

export default function About() {
  return (
    <main>
      <h1>Welcome to About Page!!</h1>
      {/* <button onClick={() => alert("Hello World!!")}>CLick Me</button> */}
      <Link href="/about/aboutstudent">About Student</Link>
      <Link href="/about/aboutteacher">ABout Teacher</Link>
      <Card name="Aditya" />
      <Card name="Akash" />
      <Card name="Gaurav" />
    </main>
  );
}
