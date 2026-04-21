import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="text-blue-500 bg-blue-50 font-bold h-screen flex flex-col items-center justify-center gap-6">
      <h2 className="text-5xl">Page Not Found</h2>
      <p className="text-3xl font-normal">Could not find requested resource</p>
      <Link href="/">
        <button className="btn btn-primary text-xl py-6 px-6">
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
