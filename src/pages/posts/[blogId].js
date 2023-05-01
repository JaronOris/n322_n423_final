import React from "react";
import { useRouter } from "next/router";
import useFirebase from "@/useHooks/useFirebase";
import useGlobalValues from "@/useHooks/useGlobalValues";

export default function PostViewPage() {
  const firebase = useFirebase();
  const { blogsList, update, error, blogsListLoadTime } = useGlobalValues();
  const router = useRouter();
  const { blogId } = router.query;
  const { blog } = firebase.getBlogById();
  return (
    <>
      <div></div>
    </>
  );
}
