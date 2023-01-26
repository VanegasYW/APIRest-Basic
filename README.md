# API Rest Basic

### 🖥 Setup 
- Remember to change the environment variables before running.
```
PORT="your port"
MONGO_CNN="your connection"
```
- Install all necessary dependencies
```
npm i
```
- Start the server
```
npm start
```

### Endpoint
The API has the following endpoint:

* GET `/users`: Get a list of all users.
    * GET `/users/:id`: Retrieve a specific user by their ID.
    * POST `/users:` Create a new user.
    * PUT `/users/:id`: Update an existing user by their ID.
    * DELETE `/users/:id`: Delete an existing user by their ID.