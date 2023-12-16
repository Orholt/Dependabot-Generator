## Template structure

Template structure is pretty simple, it's just a JSON file with some properties.

It follows dependabot.yml structure, but with some additions, also it uses different names for some properties due to JSON limitations.

### Exmaple template

```json
{
    "version": 2,
    "updates": [
        {
            "package-ecosystem": "docker",
            "file": "Dockerfile",
            "path-root": "/",
            "schedule": "daily"
        }   
    ]
}

```

### Template properties

| Property | Description | Required | Default value | Example |
| --- | --- | --- | --- | --- |
| version | Version of the template | Yes | 2 | 2 |
| updates | Array of updates (paths to check) | Yes | - | - |
| package-ecosystem | Package ecosystem | Yes | - | docker |
| file | File name | Yes | - | Dockerfile |
| path-root | Path root | Yes | - | / |
| schedule | Schedule | Yes | - | daily |


### Supported Ecosystems

More coming soon...

| Ecosystem | Value |
| --- | --- |
| Docker | docker |

### Supported Schedules

In my case it does nothing because I use Dependabot Azure DevOps extension, but it's here for future use.

| Schedule | Value |
| --- | --- |
| Daily | daily |
| Weekly | weekly |
| Monthly | monthly |

## Usage

### Creating template

You can do it yourself, or use [automatic template generation](#automatic-template-generator) feature.

#### Automatic template generation

Right now it's very simple, but it works.

If it doesn't work for you, please create an issue.

##### Prerequisites

- `.github` directory in your project root
- `.github/dependabot_template.json` file should not exist

##### How it works

- It will check if the file `dependabot_template.json` exists in the `.github` directory
- If the file does not exist, prompt the user with a question asking if they want to create the file
- If the user confirms, it will create the file with the default template
- If the user does not confirm, it will throw an error and exit

## More features coming soon...

Check out roadmap [here](../README.md#roadmap).
