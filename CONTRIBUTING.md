# Contributing Guidelines

The following is a set of guidelines for contributing to the Rock UI project. We really appreciate that you are considering contributing!

#### Table Of Contents

[Ask a Question](#ask-a-question)

[Requesting a new component](#requesting-a-new-component)

[Getting Started](#getting-started)

[Contributing](#contributing)

[Style Guides](#style-guides)
  * [Git Style Guide](#git-style-guide)

_@TODO:_[Code of Conduct](https://github.com/rockcontent/rock-ui/blob/master/CODE_OF_CONDUCT.md)

## Ask a Question

We will have a public forum soon where you can come and ask questions and have a discussion. For now please open an Issue on GitHub with the label `question`.


## Requesting a new component

If your team requires a new component that is not listed on the [Design System Documentation](https://design.rockcontent.com/docs/getting-started/), please follow the necessary steps in order to request a new component:

1. [Create a new issue](https://github.com/rockcontent/rock-ui/issues/new/choose) by selecting the `Component Request` type.
1. Add the tag `component request` on the issue;
1. Add a description explaining why this component is necessary and the name of the product that need it;
1. Add a Figma link, screenshot or an example of an existing component;
1. Add spacing, colors, how it should work and any other important description that we need to know to create this component;
1. Once you created the issue, send a message on **#team-design-system-community** Slack Channel with the link to the issue.

*Note*: Issues that do not have all the requirements won't be accepted.

## Getting Started

Follow our [README](https://github.com/rockcontent/rock-ui/blob/master/README.md) to get the Rock UI up and running.

We will have soon ([help wanted](https://github.com/rockcontent/rock-ui/issues/2)) a live project page and storybook to make it easier to check our UI Kit.

## Contributing

### Report a Bug

To report a bug, open an issue on GitHub with the label `bug` using the available bug report issue template. Please ensure the issue has not already been reported.

### Suggest an Enhancement

To suggest an enhancement, please create an issue on GitHub with the label `enhancement` using the available feature issue template.

### Open a Pull Request

* Fork the repo, create a branch, submit a PR when your changes are tested and ready for review
* Fill in [our pull request template](https://github.com/rockcontent/rock-ui/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

Note: if you’d like to implement a new feature, please consider creating a feature request issue first to start a discussion about the feature.

## Style Guides

### Git Style Guide

* Keep a clean, concise and meaningful git commit history on your branch, rebasing locally and squashing before submitting a PR
* Follow the guidelines of writing a good commit message as described here https://chris.beams.io/posts/git-commit/ and summarised in the next few points
    * In the subject line, use the present tense ("Add feature" not "Added feature")
    * In the subject line, use the imperative mood ("Move cursor to..." not "Moves cursor to...")
    * Limit the subject line to 72 characters or less
    * Reference issues and pull requests liberally after the subject line
    * Add more detailed description in the body of the git message (`git commit -a` to give you more space and time in your text editor to write a good message instead of `git commit -am`)
