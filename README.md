# Node.js CI/CD Demo Application

A simple Node.js web application demonstrating an automated CI/CD pipeline using GitHub Actions and Docker.

## Project Overview

This project demonstrates:

• Node.js application development
• Automated application testing
• Docker containerization
• GitHub Actions CI/CD
• Docker Hub image publishing

## Technologies Used

• Node.js
• Docker
• GitHub
• GitHub Actions
• Docker Hub

## Application

The application runs on port 3000.

When opened in a browser, it displays:

Hello from Node.js!

CI/CD Pipeline Demo

Deployed using GitHub Actions and Docker.

## Run Locally

Install dependencies:

npm install

Run tests:

npm test

Start the application:

npm start

Open:

http://localhost:3000

## Run with Docker

Build the Docker image:

docker build -t nodejs-demo-app .

Run the container:

docker run -d --name nodejs-demo-container -p 3000:3000 nodejs-demo-app:latest

Open:

http://localhost:3000

## Docker Hub Image

Docker Hub:

sadiajabeen0112/nodejs-demo-app

Pull the image:

docker pull sadiajabeen0112/nodejs-demo-app:latest

## CI/CD Pipeline

The GitHub Actions workflow is triggered whenever code is pushed to the main branch.

Pipeline flow:

GitHub Push
    ?
Checkout Code
    ?
Install Dependencies
    ?
Run Tests
    ?
Build Docker Image
    ?
Login to Docker Hub
    ?
Push Docker Image

The Docker Hub credentials are stored securely as GitHub Actions secrets:

DOCKERHUB_USERNAME

DOCKERHUB_TOKEN

## Workflow File

The CI/CD workflow is located at:

.github/workflows/main.yml

## Result

The pipeline automatically tests the application, builds the Docker image, and publishes the image to Docker Hub after a successful test.

