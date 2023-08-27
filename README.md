
# Project Overview
**Project Name:** File Upload and Information Retrieval Web Server

**Description:** This project involves the development of a REST API-based web server hosted on a local machine. The web server is designed to accept file uploads and provide detailed information about the uploaded files. It offers a user-friendly interface for interacting with the server.


****Endpoints****
https://file-upload-arsh.vercel.app/

**Endpoint:** /

**HTTP Method:** GET

**Description:** This endpoint provides a welcome message to confirm that the API is running.

**File Upload**

**Endpoint:** /upload

**HTTP Method:** POST

**Description:** Use this endpoint to upload a file to the server. The server processes the uploaded file and provides detailed information about it.

**Request**
POST /upload

**Content-Type:** multipart/form-data

**Response**

HTTP Status 200 OK:
![image](https://github.com/Arshsohal02/file-upload/assets/92908868/bc6ef7cf-dc0b-4261-8c1f-6d5e102e290a)

HTTP Status 400 Bad Request (No file uploaded):
![image](https://github.com/Arshsohal02/file-upload/assets/92908868/1952ace8-ba98-4ffe-874a-14c4468eeab2)

HTTP Status 500 Internal Server Error (Error determining file type):
![image](https://github.com/Arshsohal02/file-upload/assets/92908868/7ef8330d-26a0-4810-a50e-a674e594f662)

**Prerequisites**
Before you begin setting up and running the File Upload and Information Retrieval Web Server, ensure you have met the following prerequisites:

**Software Requirements**
**Node.js:** The project is built using Node.js, so you need to have it installed on your machine. You can download it from the official Node.js website.
**Docker:** If you plan to build and run the project using Docker containers, make sure you have Docker installed. You can download Docker Desktop for your operating system from the Docker website.
**Kubernetes** : If you intend to deploy the web server on a Kubernetes cluster, ensure you have access to a Kubernetes cluster and kubectl command-line tool installed.

****Key Features:****

**File Upload**: Users can upload files of various types and sizes to the web server.

![image](https://github.com/Arshsohal02/file-upload/assets/92908868/45129bf2-ab36-4b97-ba9e-aa2149523a37)

**File Information Retrieval:** The web server analyzes uploaded files and provides detailed information such as file type, MIME type, and file size.

![image](https://github.com/Arshsohal02/file-upload/assets/92908868/d2438c50-73af-481c-bdab-0d845f135fd8)

**User Interface:** A simple and intuitive user interface is provided for file uploads and information retrieval.

**RESTful API:** The server follows REST principles, offering clear API endpoints for file upload and retrieval. Hosted api: https://file-upload-arsh.vercel.app/

**Docker Containerization:** The project includes a Docker container for easy deployment and isolation.

![image](https://github.com/Arshsohal02/file-upload/assets/92908868/42e62888-9d39-46bd-b929-f073c7284765)
![image](https://github.com/Arshsohal02/file-upload/assets/92908868/794814b4-7db7-4519-8117-2224e9c9d6e4)
![image](https://github.com/Arshsohal02/file-upload/assets/92908868/fe2643f1-fedc-42c3-a95b-b9d3afe1fc24)
![image](https://github.com/Arshsohal02/file-upload/assets/92908868/5ee2262c-7a1a-46a1-8478-0989215963d9)

**Used Bash Script to run the container:** In the build-docker.yaml file where run container commands in bash are executed

![image](https://github.com/Arshsohal02/file-upload/assets/92908868/7219f145-a3cb-457c-8e2d-557ade0ffb7a)

**Kubernetes Compatibility:** Kubernetes manifest files are provided for hosting the web server within a Kubernetes clusterI(which was for now created on a local machine using Docker Desktop). This is for now run on local machine and is hosted locally.

![image](https://github.com/Arshsohal02/file-upload/assets/92908868/fbc65465-1f71-4762-a671-74babfc0822d)

