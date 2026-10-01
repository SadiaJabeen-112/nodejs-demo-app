\# Node.js CI/CD Demo Application



This is a simple Node.js web application created for a DevOps internship task.



The main purpose of this project is to set up a basic CI/CD pipeline using GitHub Actions and Docker.



The application is tested first, then packaged into a Docker image and pushed to Docker Hub automatically.



\## What I used



Node.js

Docker

GitHub

GitHub Actions

Docker Hub



\## Application



The application is a basic HTTP server running on port 3000.



To run it locally:



&#x20;   npm install

&#x20;   npm start



Open the application in a browser:



&#x20;   http://localhost:3000



The application displays:



&#x20;   Hello from Node.js!

&#x20;   CI/CD Pipeline Demo

&#x20;   Deployed using GitHub Actions and Docker.



\## Testing



A basic application test is included in `app.test.js`.



To run the test:



&#x20;   npm test



The same test is executed by the GitHub Actions pipeline before the Docker image is built.



\## Docker



The application is containerized using the Dockerfile in the project.



Build the image:



&#x20;   docker build -t nodejs-demo-app .



Run the container:



&#x20;   docker run -d --name nodejs-demo-container -p 3000:3000 nodejs-demo-app:latest



The application can then be accessed at:



&#x20;   http://localhost:3000



\## CI/CD Pipeline



The workflow is defined in:



&#x20;   .github/workflows/main.yml



The workflow runs when code is pushed to the `main` branch.



The current pipeline performs these steps:



&#x20;   Checkout code

&#x20;   Install dependencies

&#x20;   Run tests

&#x20;   Build Docker image

&#x20;   Login to Docker Hub

&#x20;   Push Docker image



Docker Hub credentials are stored in GitHub Actions secrets and are not included in the repository.



The image is published to:



&#x20;   sadiajabeen0112/nodejs-demo-app:latest



It can also be pulled using:



&#x20;   docker pull sadiajabeen0112/nodejs-demo-app:latest



\## Project Structure



&#x20;   nodejs-demo-app/

&#x20;   ¦

&#x20;   +-- .github/

&#x20;   ¦   +-- workflows/

&#x20;   ¦       +-- main.yml

&#x20;   ¦

&#x20;   +-- app.js

&#x20;   +-- app.test.js

&#x20;   +-- Dockerfile

&#x20;   +-- .dockerignore

&#x20;   +-- .gitignore

&#x20;   +-- package.json

&#x20;   +-- package-lock.json

&#x20;   +-- README.md





\## Result



The application is running successfully in Docker, and the GitHub Actions workflow successfully tests the application, builds the Docker image and publishes it to Docker Hub.



&#x20;    DevOps Intern - Task:01 Completed

