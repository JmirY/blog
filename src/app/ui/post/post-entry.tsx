"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PostEntry({ data }) {
  const pathname = usePathname();
  
  return (
    <Link href={`${pathname}/${data.slug}`}>
      <div className="text-xl font-semibold">
        {data.title}
      </div>
      <div className="text-sm">
        {data.date}
      </div>
    </Link>
  );
}