import fs from "fs";
import matter from "gray-matter";
import PostEntry from "@/app/ui/post/post-entry";
import { fetchPostFiles } from "@/util/post-util";

export default async function PostList() {
  const postFiles = await fetchPostFiles();
  console.log("Fetched post files: ", postFiles);
  
  const metaDataArr = postFiles.map(postFile => extractMetaDataFrom(postFile));
  console.log("Posts' meta data: ", metaDataArr);

  return (
    <ol className="flex flex-col gap-7">
      {metaDataArr.map(metaData => createPostListEntryFrom(metaData))}
    </ol>
  );
}

function extractMetaDataFrom(filePath: string) {
  const fileContents = fs.readFileSync(filePath, "utf-8");

  return matter(fileContents).data;
}

function createPostListEntryFrom(postMetaData: {[key: string]: string}) {
  const data = {
    title: postMetaData.title,
    date: formatDateString(postMetaData.date),
    slug: postMetaData.slug,
  };
  
  return (
    <li key={data.slug}>
      <PostEntry data={data} />
    </li>
  )
}

function formatDateString(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  
  let month = (date.getMonth() + 1).toString();
  if (month.length < 2) {
    month = "0" + month;
  }

  let day = date.getDate().toString();
  if (day.length < 2) {
    day = "0" + day;
  }

  return `${year} / ${month} / ${day}`;
}