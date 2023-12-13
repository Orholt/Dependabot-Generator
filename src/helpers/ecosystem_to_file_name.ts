import { Ecosystem } from "../models/enums";

export const ecosystemToFileName = (ecosystem: Ecosystem): string => {
    switch (ecosystem) {
      case Ecosystem.docker:
        return "Dockerfile";
      // case Ecosystem.npm:
      //   return "package.json";
      // case Ecosystem.pip:
      //   return "requirements.txt";
      // case Ecosystem.maven:
      //   return "pom.xml";
      // case Ecosystem.gradle:
      //   return "build.gradle";
      default:
        return "";
    }
  };