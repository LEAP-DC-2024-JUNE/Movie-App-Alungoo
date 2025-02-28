"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const NextPage = () => {
  const searchParams = useSearchParams();
  const count = searchParams.get("count");

  return (
    <div>
      <h1>Next Page ni:</h1>
      <p>from inClass page shu:{count}</p>
    </div>
  );
};

export default NextPage;
