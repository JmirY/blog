"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PostData } from "@/util/post-manager";

export default function PostEntry({
  data,
}: {
  data: PostData
}) {
  const pathname = usePathname();
  const encodedSlug = encodeURIComponent(data.slug);
  
  return (
    <Link href={`${pathname}/${encodedSlug}`}>
      <div className="text-xl font-semibold">
        {data.title}
      </div>
      <div className="text-sm">
        {data.date}
      </div>
    </Link>
  );
}