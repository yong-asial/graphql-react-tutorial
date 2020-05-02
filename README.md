# GraphQL (React) Try-Out

## Description

A simple GraphQL Server with React (Apollo) Frontend

## Prerequisities

- NodeJS
- Docker

## Run Server
```bash
cd server;
npm install;
npm run dev;
```

## Add some data to start off
- Navigate to `http://localhost:4000/graphql?`
- Add a few authors
```json
mutation {
  addAuthor(name: "Nick Bostrom", age: 47) {
    name
    age
  }
}
```

## Run Client
```bash
cd client;
npm install;
npm run start;
```
