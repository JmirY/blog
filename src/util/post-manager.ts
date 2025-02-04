import path from "path";
import fs from "fs";
import matter from "gray-matter";

export interface PostData {
  title: string,
  date: string,
  slug: string,
  content: string,
}

const POST_DIR_PATH = "/post";

export class PostManager {
  static #instance: PostManager;
  postDataList: PostData[];

  constructor() {
    this.postDataList = [];
  }

  static get instance() {
    if (!PostManager.#instance) {
      PostManager.#instance = new PostManager();
    }

    return PostManager.#instance;
  }

  async fetchPostDataList() {
    if (this.postDataList.length === 0) {
      const postFiles = await fetchPostFiles();
      const matterResults = postFiles.map((file) => {
        const filePath = path.join(process.cwd(), POST_DIR_PATH, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
  
        return matter(fileContents);
      });
  
      for (let i = 0; i < postFiles.length; ++i) {
        const postData: PostData = {
          title: matterResults[i].data.title,
          date: formatDate(matterResults[i].data.date),
          slug: postFiles[i].split(".")[0],
          content: matterResults[i].content,
        }
  
        this.postDataList.push(postData);
      }
    }

    return this.postDataList;
  }
}

function fetchPostFiles(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const directoryPath = path.join(process.cwd(), POST_DIR_PATH);

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
          reject();
        }
        
        resolve(files);
      });
  });
}

function formatDate(date: Date): string {
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