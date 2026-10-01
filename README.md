Node.js CI/CD Demo Application



This project is a simple Node.js web application created as part of a DevOps internship task.



The project demonstrates how a basic application can be tested, containerized with Docker, and automatically published to Docker Hub using GitHub Actions.



Project flow



Code pushed to the main branch

&#x20;       ?

Application tests run

&#x20;       ?

Docker image is built

&#x20;       ?

Docker Hub authentication

&#x20;       ?

Docker image is published





Technologies Used



Node.js

Docker

Git

GitHub

GitHub Actions

Docker Hub





Application



The application runs on port 3000.



When the application is started, open:



http://localhost:3000



The application displays:



Hello from Node.js!



CI/CD Pipeline Demo



Deployed using GitHub Actions and Docker.





Run Locally



Install dependencies:



npm install



Run the tests:



npm test



Start the application:



npm start



Then open:



http://localhost:3000





Run with Docker



Build the image:



docker build -t nodejs-demo-app .



Start the container:



docker run -d --name nodejs-demo-container -p 3000:3000 nodejs-demo-app:latest



Then open:



http://localhost:3000





Docker Hub



Docker image:



sadiajabeen0112/nodejs-demo-app:latest



The image can be pulled using:



docker pull sadiajabeen0112/nodejs-demo-app:latest





CI/CD Pipeline



The GitHub Actions workflow is stored in:



.github/workflows/main.yml



The workflow runs automatically when code is pushed to the main branch.



It performs the following steps:



Checkout the source code

Install dependencies

Run application tests

Build the Docker image

Log in to Docker Hub

Push the Docker image





Project Structure



nodejs-demo-app/

&#x20;   .github/

&#x20;       workflows/

&#x20;           main.yml

&#x20;   app.js

&#x20;   app.test.js

&#x20;   Dockerfile

&#x20;   .dockerignore

&#x20;   .gitignore

&#x20;   package.json

&#x20;   package-lock.json

&#x20;   README.md





Result



The application is tested automatically through GitHub Actions. After the tests pass, the Docker image is built and published to Docker Hub.



Screenshots



Screenshots of the application, GitHub Actions pipeline, and Docker Hub image will be added here.

