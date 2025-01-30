'use client';

import Link from "next/link";
import Title from "@/app/ui/title";

export function NavigationPanel() {
  return (
    <div className="shadow p-5 flex flex-row justify-start">
      <div>
        <Link href="/">
          <Title />
        </Link>
      </div>
    </div>
  );
}