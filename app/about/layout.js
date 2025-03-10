"use client";
import { useRouter } from "next/navigation";

export default function AboutLayout({ children }) {
  const router = useRouter();
  const handleBtnClick = (_, type) => {
    switch (type) {
      case "teacher":
        router.push("/about/teacher");
        break;
      case "student":
        router.push("/about/student");
        break;
    }
  };
  return (
    <>
      <nav>
        <button onClick={(event) => handleBtnClick(event, "teacher")}>
          About Teacher
        </button>
        <button onClick={(event) => handleBtnClick(event, "student")}>
          About Student
        </button>
      </nav>
      <main>{children}</main>
    </>
  );
}
