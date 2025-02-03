'use client';

import Link from "next/link";
import Title from "@/app/ui/title";

export function NavigationPanel() {
  return (
    <div className="p-4 flex flex-row justify-start bg-neutral-100">
      <div>
        <Link href="/">
          <Title />
        </Link>
      </div>
    </div>
  );
}