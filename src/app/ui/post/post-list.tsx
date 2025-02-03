import path from "path";
import fs from "fs";
import matter from "gray-matter";

const POST_DIR_PATH = "/post";

export default async function PostList() {
  const postFiles = await fetchPostFiles();
  console.log("Fetched post files: ", postFiles);
  
  const metaDataArr = postFiles.map(postFile => extractMetaDataFrom(postFile));
  console.log("Posts' meta data: ", metaDataArr);

  return (
    <ol>
      {metaDataArr.map(metaData => createPostListEntry(metaData))}
    </ol>
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

function createPostListEntry(postMetaData: {[key: string]: string}) {
  return <li>{postMetaData.title + " " + postMetaData.date}</li>;
}