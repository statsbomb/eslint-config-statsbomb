# Statsbomb Eslint Config
This is the base eslint config for Statsbomb projects. 
It extends the popular airbnb rules, with a few customisations and prettier baked in.

### Installation
* `npx install-peerdeps --dev @statsbomb/eslint-config`

### Usage
Add the following to your `.eslintrc` or `eslintrc.json` file:

```json
{
  "extends": [
    "@statsbomb/eslint-config"
  ]
}
```

Or for React projects:

```json
{
  "extends": [
    "@statsbomb/eslint-config/react"
  ]
}
```

### Extending
Currently, we have standard rules and React rules. 
Should we want more rules for an additional framework (Vue for example), they should extend the base config (./base.js).
See the React rules as an example.

### Overriding Base Rules
Base rules can be overridden in your local projects using the `rules` property in your `eslintrc` file. 
This can be done within reason but should be done sparingly.

### Publishing
Publishing to NPM and Git Tagging is handled by a manual action in Github.
Click on `Actions` -> `Select Workflow` -> `Publish`.
Choose the version from the following options:
* patch
* minor
* major 
* prepatch 
* preminor
* premajor
* prerelease
* or specify the [semversion number](https://semver.org/) directly (ie `1.0.1`)
