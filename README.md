# LeadTower Website

## Project description

LeadTower Website

## Related resources

- [Production](http://localhost:3000)
- [Staging](http://localhost:3000)
- [Link to front-end repository](https://github.com/LeadTower/website_fe)
<!-- - [APIs Documentation](https://api) -->
- [Jira](https://techlexity.atlassian.net/jira/software/projects/LAP/boards/40)
- [Next.js documentation](https://nextjs.org/docs)

## Runtime environment

- node.js
- next.js

## Commands

The list of custom tasks/commands/scripts that could be run within the application

- `yarn dev` - run dev server
- `yarn build` - build the app
- `yarn test` - run tests
- `yarn test:coverage` - generate coverage report
- `yarn test:watch` - run the test suite in watch mode
- `yarn ts:lint` - run tsconfig
- `yarn lint` - run linter
- `yarn lint:fix` - run linter and fix
- `yarn prettier` - run prettier and check files
- `yarn prettier:format` - run prettier and format files

## Development environment

### Manual setup

1. Install `node.js` and `npm`
2. Copy `.env.example` as `.env`
3. Fill `.env` with proper values for environment variables
4. Run `yarn install` in project root directory

### Manual boot

1. Run `yarn dev`

## Test environment

- Linter `yarn lint`
- Tests `yarn test`

## Settings

#### `.eslintignore`

List of files and folders that will be ignored by ESLint.

#### `.eslintrc.json`

Configuration for ESLint. [See configuration](https://eslint.org/docs/user-guide/configuring)

#### `.prettierignore`

List of files and folders that will be ignored by Prettier.

#### `.prettierrc.json`

Configuration for Prettier. [See configuration](https://prettier.io/docs/en/configuration.html)

<!-- #### `.jest.config.js`

Configuration for Jest. [See configuration](https://nextjs.org/docs/testing#jest-and-react-testing-library)

#### `.jest.setup.js`

Configuration for Jest. [See configuration](https://nextjs.org/docs/testing#jest-and-react-testing-library) -->

## Deployment instructions

Deployment procedure for staging and production.

### Staging deploy

Staging is deployed automatically when there are changes in `staging` branch in a repository.

### Production deploy

Staging is deployed automatically when there are changes in `production` branch in a repository.
