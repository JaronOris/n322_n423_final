import React from "react";
import { useRouter } from "next/router";

export default function PostViewPage() {
  const router = useRouter();
  const { blogId } = router.query;

  return (
    <>
      <h1>Post #1{blogId}</h1>
    </>
  );
}
