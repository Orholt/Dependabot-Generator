import fs from 'fs';
import inquirer from 'inquirer';
import { getTemplateString } from '../models/template';
import { DebugLogger } from './debug_logger';

export const checkFileExist = async (basePath: string = "./") => {
    // if not exists .github throw
    DebugLogger.log(`Checking if .github folder exists in ${basePath}, full path: ${basePath + '.github'}`);

    if (!fs.existsSync(basePath + '.github')) {
        await inquirer.prompt([
            {
                type: 'confirm',
                name: 'createGithubFolder',
                message: 'No .github folder found. Create one?',
                default: true
            }
        ]).then(answers => {
            if (answers.createGithubFolder) {
                fs.mkdirSync( basePath + '.github');
                console.log('Created .github folder');
            } else {
                throw new Error('No .github folder found');
            }
        });
    }
    
    // if not exists .github/dependabot_template.yaml create one and exit with message
    if (!fs.existsSync( basePath + '.github/dependabot_template.json')) {
        await inquirer.prompt([
            {
                type: 'confirm',
                name: 'createDependabotTemplate',
                message: 'No .github/dependabot_template.json found. Create one?',
                default: true
            }
        ]).then(answers => {
            if (answers.createDependabotTemplate) {
                fs.writeFileSync( basePath + '.github/dependabot_template.json', getTemplateString());
                console.log(`Created ${basePath}.github/dependabot_template.json`);
            } else {
                throw new Error(`No ${basePath}.github/dependabot_template.json found`);
            }
        });
    }
}

