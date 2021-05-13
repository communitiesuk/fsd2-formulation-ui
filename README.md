# README - template

(run `docker-compose run ui npm update` first)

## Working with the project

To work with this project the only install you need is the most recent
version of [Docker Desktop](https://www.docker.com/products/docker-desktop).

### Set up the project

You must complete ALL these steps in the stated order.

#### 1. Build Docker containers

Given that you have Docker installed OK, build the project like this:
```shell script
$ docker-compose build
```

This is a one-off step although you will have to repeat it if you fundamentally
change the project.

#### 2. Install front-end (npm) packages

For Docker reasons you _must_ install npm packages through the Docker Compose service. Do not install them
natively on your host. For reasons see [this Docker blog post](https://www.docker.com/blog/keep-nodejs-rockin-in-docker/).

Install npm packages like this:
```shell script
docker-compose run ui npm install
```

### Start the dev server

```shell script
$ docker-compose up
```

The ui service will be exposed at http://localhost:8080/

### Interact!

