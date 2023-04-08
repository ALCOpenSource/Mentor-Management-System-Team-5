# Mentor-Management-System

Mentors Management system is a people management app that enables proper
coordination of mentors needed to execute projects, ranging from recruitment to off-boarding.

This project was created with React, Vite and Typescript and outlined in the steps below are the procedures involved in running the project. 

## Running the Project
---
To get started, you will need to have Node.js installed on your machine. If you don't have it installed, you can download it from the official Node.js website: https://nodejs.org/

Once you have Node.js installed, follow these steps:

*   Clone the repository to your local machine.
*   Navigate to the project directory in your terminal.
*   Run `npm install` or `yarn` to install all dependencies.
*   Run `npm run dev` or `yarn dev` to start the development server.

The application should now be running at http://localhost:3000. Any changes you make to the code will be automatically reloaded in the browser.

## Production
---
To build the production version of the application, run the following command:

`npm run build`  or  `yarn build`

This will create a `dist` directory with the production-ready files.

To preview the production version of the application locally, run the following command:

`npm run preview`  or  `yarn preview`


## Environment Variables
---
This project uses environment variables to store sensitive information such as API keys or database credentials. To access these variables in the development or production environments, kindly follow the steps outlined below.

### Development Environment
To access environment variables in the development environment, you can create a `.env.development` file in the root of your project and define your variables like this:


*   `VITE_API_KEY` = your_api_key_here
*   `VITE_API_URL` = https://api.example.com

Note that any environment variable starting with  `VITE_` will be automatically loaded into your Vite application.

To access these variables in your code, you can use the `import.meta.env` object like this:

*   const apiKey = **import.meta.env.VITE_API_KEY**;
*   const apiUrl = **import.meta.env.VITE_API_URL**;

### Production Environment
To access environment variables in the production environment, you can create a `.env.production` file in the root of your project and define your variables like this:


*   `VITE_API_KEY` = your_api_key_here
*   `VITE_API_URL` = https://api.example.com

Note that any environment variable starting with  `VITE_` will be automatically loaded into your Vite application.

To access these variables in your code, you can use the `import.meta.env` object like this:

*   const apiKey = **import.meta.env.VITE_API_KEY**;
*   const apiUrl = **import.meta.env.VITE_API_URL**;

Be advised to not commit any sensitive information to your version control system. You can use tools like `.gitignore` to exclude your `.env` file from the remote repository.

## TypeScript Support
---
This project includes TypeScript support out of the box. You can write your React components and other code using TypeScript.

To create a new TypeScript file, use the `.tsx` or `.ts` extensions instead of `.js` or `.jsx`.

## Show your support
---
Give a ⭐️ if you like this project!

## Conclusion
---
If you have any questions or issues, please don't hesitate to reach out to the project contributors. 
Thank you.




