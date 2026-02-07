import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="lg:flex">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="h-6 w-auto"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
}
