# Statsbomb Eslint Config

This is the base eslint config for Statsbomb projects.
It extends the popular airbnb rules, with a few customisations and prettier baked in.

### Installation

We do have a @statsbomb organisation set up at the npm registry.
We cannot use the npm organisation at the moment, because we also have private packages stored in Github's Package Registry, and there is currently no way of telling `npm` to install private packages from one place and private ones from another.
Until that issue is fixed, this config is stored in Github's Package Registry.

In order to tell npm to download the package from Github rather than the npm registry, you will need to do the following:

- Generate a [Github personal access token using these instructions](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).
  - Your token will need read access at a minimum.
- Add the following to a `.npmrc` file in the project root, _or_ per user (ie `~/.npmrc`), replacing `YOUR_GITHUB_AUTH_TOKEN` with your token.
  ```
  //npm.pkg.github.com/:_authToken=YOUR_GITHUB_AUTH_TOKEN
  @statsbomb:registry=https://npm.pkg.github.com
  ```

You will then be able to install in your project by running the following command:

```bash
npx install-peerdeps --dev @statsbomb/eslint-config
```

### Usage

Add the following to your project's `.eslintrc` or `eslintrc.json` file:

```json
{
  "extends": ["@statsbomb/eslint-config"]
}
```

Or for typescript projects:

```json
{
  "extends": ["@statsbomb/eslint-config/typescript"],
  "parserOptions": {
    "project": ["**/tsconfig.json"]
  }
}
```

Or for React projects:

```json
{
  "extends": ["@statsbomb/eslint-config/react"]
}
```

Or for React with typescript projects:

```json
{
  "extends": ["@statsbomb/eslint-config/typescript-react"],
  "parserOptions": {
    "project": ["**/tsconfig.json"]
  }
}
```

### Contributing

Please ensure that all changes are logged in the changelog.md file.

### Format of changelog entry:
```mdx
- [type] REF-0001 Description of change @userHandleOfChangeMaker
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

- patch
- minor
- major
- prepatch
- preminor
- premajor
- prerelease
- or specify the [semversion number](https://semver.org/) directly (ie `1.0.1`)
