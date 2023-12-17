import fs from "fs";
import path from "path";
import { DebugLogger } from "./debug_logger";
import { Ecosystem } from "../models/enums";
import { ecosystemToFileName } from "./ecosystem_to_file_name";
import ora from "ora";

export const startFileSearch = async (
  baseDir: string = "./",
  ecosystem: Ecosystem = Ecosystem.docker
): Promise<SearchResult[]> => {
  return await searchDirectories(baseDir, ecosystem);
};

export interface SearchResult {
  fileName: string[];
  ecosystem: Ecosystem | null;
  path: string;
}

const searchDirectories = (
  baseDir: string = "./",
  ecosystem: Ecosystem
): Promise<SearchResult[]> => {
  // define variables
  DebugLogger.log("searchDirectories", "DEBUG");

  DebugLogger.log("baseDir: " + baseDir, "DEBUG");
  const spinner = ora(`Searching paths for ecosystem ${Ecosystem[ecosystem]} ...`).start();
  const toSearch = ecosystemToFileName(ecosystem);
  DebugLogger.log("toSearch: " + toSearch, "DEBUG");

  return new Promise<SearchResult[]>((resolve, reject) => {
    const results: string[] = [];

    function search(dir: string, fileName: string) {
      const files = fs.readdirSync(dir);

      for (const file of files) {
        const filePath = path.join(dir, file);

        if (fs.statSync(filePath).isDirectory()) {
          search(filePath, fileName);
        } else if (file === fileName) {
          results.push(path.dirname(filePath)); // Use path.dirname to get the directory path
        }
      }
    }

    toSearch.forEach((fileName) => search(baseDir, fileName));

    for (let index = 0; index < results.length; index++) {
      const element = results[index];

      // replace "\" with "/"
      results[index] = element.replace(/\\/g, "/");
      results[index] = "/" + results[index];
    }

    spinner.succeed(`Found ${results.length} paths for ecosystem ${Ecosystem[ecosystem]}`);

    const toReturn = results.map((el) => {
      return {
        fileName: toSearch,
        ecosystem: ecosystem,
        path: el,
      };
    });

    resolve(toReturn);
  });
};

// let foundFiles = searchDirectories();
// // replaces "\\" with "/"
// foundFiles.forEach(el => el.replace(/\\\\/g, "/"));
// // now we have arrs of path, add "/" to each
// foundFiles = foundFiles.map(el => "/" + el);
// // now we have arrs of path, starting with "/" each
// console.log(foundFiles);
