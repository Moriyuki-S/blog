FROM node:20-bullseye-slim

WORKDIR /app

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git

COPY . .

RUN npm install