"use client";

import Link from "next/link";
import Title from "@/app/ui/title";

export default function NavigationBar() {
  return (
    <div className="py-3 flex flex-row justify-center bg-neutral-100">
      <div>
        <Link href="/">
          <Title />
        </Link>
      </div>
    </div>
  );
}