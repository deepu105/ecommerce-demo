# ecommerce-demo

## Requirements

1. [NodeJS (LTS)](https://nodejs.org/en/download/)
2. [Java 8](https://java.com/en/download/)
3. [Docker](https://www.docker.com/get-started) (Provide atleast 8GB RAM)
4. [Docker compose](https://docs.docker.com/compose/install/)

## Install

```
$ npm install -g generator-jhipster
```

## Create the JDL & generate the applications (use the app.jdl in this repo)

```
$ mkdir myApp && cd myAPP

$ jhipster import-jdl app.jdl
```

## Create docker-compose files

```
$ mkdir docker && cd docker

$ jhipster docker-compose
```

## Create kubernetes/Rancher/Openshift setup

```
$ mkdir <platform> && cd <platform>
$ jhipster kubernetes|rancher-compose|openshift
```
