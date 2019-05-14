# Node Authentication Starter

A boilerplate project built with Node, Express and passport.js for building a password/JWT protected API server.

## Getting Started

Checkout this repo, install dependencies, then start the server process with the following:

```shell
git clone https://github.com/CodeSchwert/node-auth-starter.git
cd node-auth-starter
npm install

# change the secret in config.js!!
npm run dev
```

The API server should be running on `localhost:3090`.

Remember to cleanup the mongoDB container:

```shell
# from node-auth-starter/
docker-compose down
```

## Routes

There are three routes on the API:

- `/signup`
- `/signin`
- `/`
- `/unprotected`

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

### **Unprotected** (debug route)

Does not require authentication.

```shell
Method: GET
Content-Type: 'application/json'
Returns: { "Unprotected": "Route!" }
```
