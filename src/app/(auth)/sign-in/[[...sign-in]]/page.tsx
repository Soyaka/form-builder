import React from "react";
import { SignIn } from "@clerk/nextjs";
export default function Sign_In() {
  return (
    <div className="flex flex-row justify-center items-center w-full h-screen">
      <SignIn />
    </div>
  );
}
