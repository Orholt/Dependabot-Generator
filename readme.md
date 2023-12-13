<img src="https://github.com/Orholt/DependabotGenerator/raw/master/docs/banner.png">

# Dependabot Generator

A simple, Node-powered `dependabot.yml` generator

## Table of Contents
- [Dependabot Generator](#dependabot-generator)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
    - [Idea](#idea)
    - [Roadmap](#roadmap)
      - [General](#general)
      - [Dependencies](#dependencies)
      - [CI/CD](#cicd)
      - [Misc](#misc)
  - [Technologies](#technologies)
  - [Usage](#usage)

## About the Project
This project is a simple Node-powered `dependabot.yml` generator. It is designed to be used in conjunction with [Dependabot](https://dependabot.com/), a GitHub app that automates dependency updates. 

Dependabot is a great tool, but it can be a bit of a pain to configure. This project aims to make that process a little easier by utilizing a JSON based templates to generate `dependabot.yml` file.

### Idea

The idea for this project came to me when I started to using [Dependabot Azure DevOps extension](https://github.com/tinglesoftware/dependabot-azure-devops).

I work with projects that have multiple docker images, most of the time 5 or more.

I wanted to be able to generate `dependabot.yml` by just providing project path, so I started coding...

### Roadmap

#### General

- [x] Generate `dependabot.yml` file from provided template that handles asterisks and Docker images
- [x] Example template generation
- [ ] Template validation
- [ ] Template duplicates detection
- [ ] Template auto fixing capability

#### Dependencies

- [x] Docker support ( Dockerfile )
- [ ] Npm support ( package.json )
- [ ] Pip support ( requirements.txt )
- [ ] Maven support ( pom.xml )
- [ ] Nuget support ( packages.config )
- [ ] Composer support ( composer.json )
- [ ] Gradle support ( build.gradle )
- [ ] Cargo support ( Cargo.toml )

#### CI/CD

- [ ] GitHub Actions ( auto deploy to NPM )
- [ ] Versioning
- [ ] Changelog
- [ ] Tests
- [ ] Code coverage
- [ ] Code quality
- [ ] Code style
- [ ] Code documentation

#### Misc

- [ ] DevOps pipeline support ( so it can be used as a task )
- [ ] CLI template generator
- [x] [Template documentation](./docs/templates.md)

## Technologies

This project is built with **Node.js** (version 18.10.0) and **TypeScript** (version 5.3.3).

I choose this due to fact that I started to build with in mind that it will be used as a CLI tool, also I really want to be able to run it **anywhere**.

From scratch I used JavaScript but due to fact that I wanted to have some type safety I switched to TypeScript, also I'm Angular developer so I'm used to it.

**I wrote this as Draft and proof of concept, so I will clean my code and add some tests later on.**

## Usage

