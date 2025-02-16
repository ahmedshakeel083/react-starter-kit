# React Starter Kit

This template provides a minimal setup to get React with Typescript, Vite, HMR along with other features.

## Table of Contents
- Features
- Packages Installed
- File Structure
- Usage

### Features
- State  Management - Redux Toolkit
- Routing - React Router with createBrowserRouter
- Styling - Shadcn Ui Components with Tailwind css
- Testing - Testcases are written with vitest, jest
- Linting - Eslint with Husky for pre-commit checks
- Network Layer - network file using axios
- Form Validation Schema - React Hook Forms using zod

### Packages Installed
|Name|Usage  |
|--|--|
|@hookform/resolvers  |Forms creation with validation  |
|axios  |Network Calls  |
|react-ga4  |Tracking in Google Analytics  |
|react-hook-form  |Create Forms and Validate  |
|react-redux  |State Management  |
|react-router-dom	|To enable routing between internal pages|
|tailwind-merge |Merge classes for same component |
|zod	|Form Validation	|
|vite	|Development Build tool	|
|typescript	|Type checks|

### File Structure
	├──.husky 
	│   └── pre-commit		# Script to run before commit eg linting
    ├── public			# Can be used for assets incase of exceptions
    ├── src
    │   ├── assets		# To manage and optimize all the images, fonts, etc
    │   ├── components     	
    │   │   ├── common 		# Reusable common components
    │   │   ├── ui 			# Reusable shadcn ui components
    │   ├── hooks			# Custom hooks
    │   ├── lib
    │   │   ├── constants		# constants throughout the project
    │   │   └── utils      # shadcn ui utils
    │   ├── network        # Network requests and API layer
    │   ├── pages          # Pages or views
    │   ├── state       # State management
    │   │   ├── slices    # All the reducers/slices
    │   │   └── store.ts   # All the reducers to be imported here
    │   ├── tests          # Testcases
    │   ├──  App.tsx            # App component with all routes
    │   ├── index.css 		# For css variables and tailwind imports
    │   ├── main.tsx		# Entry Point for the project
    │   ├── output.css    # Tailwind css output file
    ├── .env.development       # development environment file
    ├── .env.production    # production environment file
    ├── .env.uat    # uat environment file
    ├── .eslintrc.json    #linting configuration
    ├── .gitignore          # Git Ignored folder and files name
    ├── .eslintrc          # ESLint configuration
    ├── components.json          # Shadcn ui components config
    ├── index.html          # Project HTML file
    ├── postcss.config.js          # Tailwind config using this file
    ├── tailwind.config.js          # Tailwind main config file
    ├── tsconfig.app.json          # typescript config file
    ├── tsconfig.typedoc.json          # Typedoc Config file
    ├── vite.config.ts          # Vite as build tool config
    ├── vitest.config.ts          # Vitest configuration
    ├── vitest.setup.ts          # Vitest configuration
    ├── README.md
    └── package.json

### Usage
- To run the project in local
```
npm install && npm run dev
```
- To run the project build
```
npm run build && npm run preview
```
- To run testcases
```
npm run test
npm run coverage
```
- To create a new typedoc after making changes to project or adding new types or new components
```
npm run docs
```
- To run Storybook to checkout all the variants of the components
```
npm run storybook
```

### Enabling the installation through NPM
  - Create a file called bin/cli.js (bin is the folder name)
  - cli,js contains the code for the installation
  - Add the name in package.json Eg. "name": "@username/react-starter-kit". Here username is the account holder username by which the acc exists in npm
  - Add this in package.json with "bin": "./bin/cli.js"
  - Change the version number in package.json every time u push the new change to npm
```
npm login
npm publish --access public
```
  - To check the package has been published successfully
```
npx @username/reponame
```

### Components
  - Avatar
  - Accordion
  - Badge
  - Button
  - Breadcrumb
  - Calendar
  - Carousel
  - Card
  - Chart
  - Drawer
  - Dropdown
  - Dialog/Popup
  - Form
  - Hover Card
  - Input
  - Checkbox
  - Radio
  - Label
  - Textarea
  - Toast
  - Table (data)
