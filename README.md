# cz-conventional-changelog-for-jira

Part of the [commitizen/cz-cli](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) standard and also prompts for a mandatory JIRA issue.

[![npm version](https://img.shields.io/npm/v/cz-conventional-changelog-for-jira-al.svg?style=flat-square)](https://www.npmjs.org/package/cz-conventional-changelog-for-jira-al)
[![npm downloads](https://img.shields.io/npm/dm/cz-conventional-changelog-for-jira-al.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog-for-jira-al)
[![Build Status](https://img.shields.io/travis/digitalroute/cz-conventional-changelog-for-jira.svg?style=flat-square)](https://travis-ci.org/digitalroute/cz-conventional-changelog-for-jira)

## Features

- Works seamlessly with semantic-release 🚀
- Works seamlessly with Jira smart commits
- Automatically detects the Jira issue from the branch name

## Quickstart

### Installation

```bash
npm install commitizen cz-conventional-changelog-for-jira-al
```

and then add the following to package.json:

```json
{
  "scripts": {
    "commit": "cz"
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog-for-jira-al"
    }
  }
}
```

### Usage

![Gif of terminal when using cz-conventional-changelog-for-jira](https://raw.githubusercontent.com/digitalroute/cz-conventional-changelog-for-jira/master/images/demo.gif)

## Configuration

Like commitizen, you can specify the configuration of cz-conventional-changelog-for-jira through the package.json's `config.commitizen` key, or with environment variables.

| Environment variable | package.json    | Default           | Description                                                                                                                                                             |
| -------------------- | --------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CZ_MAX_HEADER_WIDTH  | maxHeaderWidth  | 72                | This limits how long a commit message head can be.                                                                                                                      |
| CZ_MIN_HEADER_WIDTH  | minHeaderWidth  | 2                 | This limits how short a commit message can be.                                                                                                                          |
| CZ_MAX_LINE_WIDTH    | maxLineWidth    | 100               | Commit message bodies are automatically wrapped. This decides how long the lines will be.                                                                               |
| CZ_SKIP_DESCRIPTION  | skipDescription | false             | If description should be used in commit messages.                                                                                                                       |
| CZ_SKIP_BREAKING     | skipBreaking    | false             | If breaking changes should be used in commit messages.                                                                                                                  |
|                      | scopes          | undefined         | A list (JS Array) of scopes that will be available for selection. Note that adding this will change the scope field from Inquirer 'input' to 'list'.                    |
| CZ_TYPE              | defaultType     | undefined         | The default type.                                                                                                                                                       |
| CZ_SUBJECT           | defaultSubject  | undefined         | A default subject.                                                                                                                                                      |
| CZ_BODY              | defaultBody     | undefined         | A default body.                                                                                                                                                         |
| CZ_ISSUES            | defaultIssues   | undefined         | A default issue.                                                                                                                                                        |
| CZ_JIRA_PREFIX       | jiraPrefix      | "DAZ"             | If this is set it will be displayed as the default JIRA ticket prefix                                                                                           |
| CZ_EXCLAMATION_MARK  | exclamationMark | false             | On breaking changes, adds an exclamation mark (!) after the scope, e.g.: `type(scope)!: break stuff`. When activated, reduces the effective allowed header length by 1. |

### Commitlint

If using the [commitlint](https://github.com/conventional-changelog/commitlint) js library, the "maxHeaderWidth" configuration property will default to the configuration of the "header-max-length" rule instead of the hard coded value of 72. This can be ovewritten by setting the 'maxHeaderWidth' configuration in package.json or the CZ_MAX_HEADER_WIDTH environment variable.
