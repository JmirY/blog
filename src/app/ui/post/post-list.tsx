import path from "path";
import fs from "fs";
import matter from "gray-matter";
import PostEntry from "@/app/ui/post/post-entry";

const POST_DIR_PATH = "/post";

export default async function PostList() {
  const postFiles = await fetchPostFiles();
  console.log("Fetched post files: ", postFiles);
  
  const metaDataArr = postFiles.map(postFile => extractMetaDataFrom(postFile));
  console.log("Posts' meta data: ", metaDataArr);

  return (
    <div className="flex flex-col gap-7">
      {metaDataArr.map(metaData => createPostListEntryFrom(metaData))}
    </div>
  );
}

async function fetchPostFiles(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const directoryPath = path.join(process.cwd(), POST_DIR_PATH);

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
          reject();
        }
        
        const result = files.map(file => path.join(directoryPath, file));
        resolve(result);
      });
  });
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
  
  return <PostEntry data={data} />;
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