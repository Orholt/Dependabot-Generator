#!/usr/bin/env node
import { checkFileExist } from "./helpers/file_exist_checker.js";
import ora from "ora";
import { oraPromise } from "ora";
import { startFileSearch } from "./helpers/path_gatherer.js";
import { DebugLogger } from "./helpers/debug_logger.js";
import { DependabotMapper } from "./helpers/dependabot_mapper.js";
import fs from 'fs';
import { Template } from "./models/template.js";
import * as commander from 'commander';
import { env } from 'process';

const program = new commander.Command();
program.version(process.env.npm_package_version ?? '0.0.0');

program
    .command('map')
    .description('Maps dependabot template to your project')
    .option('-p, --path <path>', 'Path to your project', './')
    .action(async (p) => {
        console.log('🤖 Mapping dependabot template');
        console.log(process.env.DEBUG)

        console.log(`🔍 Searching for .github folder in ${p.path}`);
        await checkFileExist(p.path);

        // get template
        console.log(`📄 Reading template from ${p.path}.github/dependabot_template.json`);
        const templateRAW = fs.readFileSync(p.path + ".github/dependabot_template.json", "utf8");
        DebugLogger.log(templateRAW);
        console.log(`📄 Template readed`);
        const template : Template = JSON.parse(templateRAW);
        DebugLogger.log(template);

        const mapper = new DependabotMapper(template);
        console.log(`📄➡️📝 Mapping template`);
        await oraPromise(mapper.map(), "Mapping updates");
    });

program.parse(process.argv);