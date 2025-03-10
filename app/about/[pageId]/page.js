"use client";
import { useParams } from "next/navigation";

export default function DynamicAbout() {
  const aboutId = useParams();

  return <h1>Hi this is {aboutId.pageId}</h1>;
}

// about/1
// about/3
