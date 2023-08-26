#!/bin/bash

# Define variables
DOCKER_IMAGE="arshsohal02/file-upload:latest"
CONTAINER_NAME="My-docker-arsh"  # Optional: Set a custom name for your container
PORT_MAPPING="3000:3000"               # Optional: Define port mapping if needed
ENV_VARS="-e VAR_NAME=VAR_VALUE"     # Optional: Set environment variables if needed

# Run the Docker container
docker run -d --name $CONTAINER_NAME $PORT_MAPPING $ENV_VARS $DOCKER_IMAGE

# Optionally, you can add more commands or post-container startup actions here
# For example, you can run additional scripts or set up container dependencies.
