import { SearchResult } from "./path_gatherer";

export class DebugLogger {
    static log(toLog: any, label: string = "DEBUG") {
        if (process.env.DEBUG === "True") {
            console.log(label, toLog);
        }
    }

    static logPaths(toLog: SearchResult[], label : string = "DEBUG") {
        if (process.env.DEBUG === "True") {
            console.log(label, "Found paths:\n", toLog);
        }
    }

}