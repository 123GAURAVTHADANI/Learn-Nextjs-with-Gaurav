import Image from "next/image";
// reduces the size of the image
// lazy load

// "use client";
export default function About() {
  return (
    <main>
      <h1>Welcome to About Page!!</h1>
      <Image
        src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlnaCUyMHJlc29sdXRpb258ZW58MHx8MHx8fDA%3D"
        width={800}
        height={800}
        alt="preview"
      />
      {/* <button onClick={() => alert("Hello World!!")}>CLick Me</button> */}
    </main>
  );
}

// 15 MB
// reduce the
