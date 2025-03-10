"use client";

import { useParams } from "next/navigation";

export default function ProductSlug() {
  const params = useParams();
  return <h4>Product is : {params.slug}</h4>;
}

// getServerSideProps
// getStaticPaths
