![React](src/assets/img/logo.png)

## Description

We have created a demo app of [React](https://reactjs.org/) that demonstrates implementation of Material UI, Redux toolkit and Routing with react using typescript.

### Technologies and Libraries:

- [React](https://reactjs.org/)+ [Typescript](https://react-typescript-cheatsheet.netlify.app/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Axios](https://axios-http.com/)
- [i18next](https://www.i18next.com/)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/)

## Prerequisites

- [Node.js](https://nodejs.org/) (>= 14.14.36)
- [npm](https://www.npmjs.com/) (>= 6.5.0)

## Key Feature

- Login & Signup using JSON server
- Localization
- Light & Dark Theme setup
- Redux Toolkit setup
- Authenticated Routing
- Custom Hooks
- ESLint

## Code Structure

we tried to implement the best practice of code structure in our project following are the example

#### all code go in src folder

- src/components/\_ /\*.tsx
- src/containers/\_ /\*.tsx
- src/pages/\_ /\*.tsx
- src/hooks/\*.ts
- src/routes/\*.tsx
- src/utils/\*.ts
- src/redux/actions/\*.ts
- src/redux/reducers/\*.ts
- src/redux/store.ts
- src/redux/types.ts
- src/assets/fonts
- src/assets/icons
- src/translations/\*.json
- server/db.json

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

| env                | DummyData |
| ------------------ | --------- |
| REACT_APP_BASE_URL | base_url  |

## How to Setup

#### Step 1: git clone this repo.

#### Step 2: cd to the cloned repo.

#### Step 3: Install the node modules required for the project with `npm i` or `yarn install`

#### Step 4: Make sure you add the requires env in .env file check .env.example for help

#### Step 5: Start the app in development mode with `npm run dev` it will run the react application on http://localhost:3000/ and local JSON server on http://localhost:8000/ by default.

## Installation

```bash
$ npm i
```

## Running the app

```bash
# development
$ npm run dev

# build
$ npm run build
```

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
