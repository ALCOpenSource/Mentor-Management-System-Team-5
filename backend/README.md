# Mentor-Management-System

Mentors Management system is a people management app that enables proper.
coordination of mentors needed to execute projects, ranging from recruitment to off-boarding. Ensure to go through the app doc below to read more and follow all the instructions.

[Contributor's wiki](https://github.com/ALCOpenSource/Mentor-Management-System-Team-5/wiki)

## Techonologies

- Frontend
- Backend
- Database
- Deployment env

## How to contributing to this project

To get it up and running on your local machine, follow the steps below:

- Clone the repo with the command `git clonn
- Indicate your interest to work on any issue. "eg. I want to work on this issue or I am interested in this issue"
- Open a feature branch from the 'develop' branch. eg feat/

- Make sure the name is descriptive for your branch but not too long. Lead with what the the branch is doing eg new feature or bug but follow this pattern `type/branch-description` eg `feature/add-login-functionality`.
- Ensure your branch is up to date with latest changes before pushing
- Create a pull request against develop branch
- Reference the issue you worked on in your PR
- Open a pull request against the develop branch and request a review from your

### Frontend

- Navigate to the project directory with the command `cd Mentor-Management-System-Team`
- Navigate to the frontend directory with the command `cd frontend`
- Navigate to the frontend directory with the command `cd frontend mms-Admin`
- Install all the dependencies with the command `npm install`
- Start the app with the command `npm run dev`
- Navigate to the app on your browser with the url `http://localhost:****` where \*\*\*\* is the port number displayed on your terminal.

#### Backend

- Navigate to the project directory with the command `cd Mentor-Management-System-Team`
- Navigate to the backend directory with the command `cd backend`
- Navigate to the backend directory with the command `cd src`
- Navigate to the backend directory with the command `cd mms.api`
- Start the app with the command `dotnet run --project mms.api.csproj`
- Navigate to the swagger documentation on your browser with the url `http://localhost:****/swagger/index.html` where \*\*\*\* is the port number displayed on your terminal.

## Design

The design can be find [here](https://www.figma.com/file/JNZKj3lachPypSOMBOhC1e/MMS-ALC-0pen-Source-Project?node-id=6784%3A7593&t=dnwBBGHPZRxryUnJ-0)
Find the Prototype [here](https://www.figma.com/proto/JNZKj3lachPypSOMBOhC1e/MMS-ALC-0pen-Source-Project?page-id=6782%3A4428&node-id=6784%3A6712&viewport=565%2C382%2C0.02&scaling=min-zoom&starting-point-node-id=6784%3A6712)
Work on your Team assigned task eg. Team 1, Team 2 etc.

NOTE: Stickly adhere to the style guide on the design, buttons, texts etc.

### Creating issue

Raise any identified issue with your mentor.

#### Local Database Setup

1. Install and create a MySQL database (Can be change)
2. Create a .env file in the root directory
3. Set the environment variables with your local database credentials (see .env.example for reference)

##### Installation

```bash
$yarn install
```

##### Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn dev

# production mode
$ yarn start:prod
```

##### Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

##### Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
