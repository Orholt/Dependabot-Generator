import { Ecosystem, Schedule, Version } from "../models/enums";

export interface Update {
    ecosystem: string;
    file: string;
    pathRoot: string;
    schedule: string;
}

export interface Template {
    version: number;
    updates: Update[];
}

export const template: Template = {
    version: 2,
    updates: [
        {
            ecosystem: "docker",
            file: "Dockerfile",
            pathRoot: "./",
            schedule: "daily"
        }
    ]
};

export interface GeneratedUpdate {
    ecosystem: Ecosystem,
    path: string,
    schedule: Schedule
}

export interface TemplateEcosystem {
    ecosystem: Ecosystem
    elements: GeneratedUpdate[]
}

export class GeneratedTemplate {
    version: Version = Version.v2;
    updates: TemplateEcosystem[] = [];
}


export const getTemplateString = (): string => {
    let output = ""; // maybe I will put sth here in future
    output = JSON.stringify(template, null, '\t');
    return output;
}
