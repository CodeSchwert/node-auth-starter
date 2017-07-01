# Node Authentication Starter

A boilerplate project built with Node, Express and passport.js for building a password/JWT protected API server.

## Getting Started

Checkout this repo, install dependencies, then start the server process with the following:

```shell
> git clone https://github.com/studyingMole/node-auth-starter.git
> cd node-auth-starter
> npm install
> npm run dev
```

The API server should be running on `localhost:3090`.

## Routes

There are three routes on the API:

- `/signup`
- `/signin`
- `/`

### **Sign-Up**

Sign up to the API service.

```shell
Method: POST
Content-Type: 'application/json'
Body: { email, password }
Returns: { token }
```

### **Sign-In**

Sign in to the API service with a previously created user.

```shell
Method: POST
Content-Type: 'application/json'
Body: { email, password }
Returns: { token }
```

### **/** *(root route)*

This is a **Protected** route and is only accessible once signed in.

```shell
Method: GET
Content-Type: 'application/json'
Returns: { "Hello": "World!" }
```
