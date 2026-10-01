\# Node.js CI/CD Demo Application



A simple Node.js web application demonstrating an automated CI/CD pipeline using GitHub Actions, Docker, and Docker Hub.



\## Project Overview



This project demonstrates a complete CI/CD workflow that automatically:



1\. Installs Node.js dependencies

2\. Runs automated tests

3\. Builds a Docker image

4\. Authenticates with Docker Hub

5\. Pushes the Docker image to Docker Hub



\## Technologies Used



| Technology | Purpose |

|---|---|

| Node.js | Application runtime |

| Node.js Test Runner | Automated testing |

| Docker | Application containerization |

| GitHub | Source code management |

| GitHub Actions | CI/CD automation |

| Docker Hub | Container image registry |



\## Application



The application is a simple Node.js HTTP server running on port `3000`.



It displays:



\- Hello from Node.js!

\- CI/CD Pipeline Demo

\- Deployed using GitHub Actions and Docker



\## Project Structure



```text

nodejs-demo-app/

+-- .github/

¦   +-- workflows/

¦       +-- main.yml

+-- app.js

+-- app.test.js

+-- Dockerfile

+-- .dockerignore

+-- .gitignore

+-- package.json

+-- package-lock.json

+-- README.md


