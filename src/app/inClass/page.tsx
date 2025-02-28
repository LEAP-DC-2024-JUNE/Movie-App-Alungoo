"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const inClass = () => {
  const [add, setAdd] = useState(0);
  const router = useRouter();
  const handleNextPage = () => {
    router.push(`/nextPage?count=${add}`);
  };
  return (
    <div>
      <div>{add}</div>
      <Button onClick={() => setAdd(add + 1)}>ADD</Button>
      <Button onClick={handleNextPage}>NEXT</Button>
    </div>
  );
};

export default inClass;
