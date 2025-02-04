import path from "path";
import fs from "fs";

export const POST_DIR_PATH = "/post";

export async function fetchPostFiles(): Promise<string[]> {
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
