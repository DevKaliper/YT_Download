"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="grid place-items-center">
        <h1 className="text-5xl">
          Upps!! We are working on it, please try again later and go back to the
          home page :){" "}
        </h1>
        <Link
          className="btn mx-auto my-5"
          href="/">
          {" "}
          Home
        </Link>
      </div>
    </div>
  );
}
