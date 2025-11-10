# API Rest Basic

### 🖥 Setup 
Before running the API, make sure to follow these steps:

Update the environment variables in a .env file with your specific configuration:
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

### 🌐 Endpoint *(No Authentication Required)*

The API provides the following endpoints:

| Method | Endpoint       | Description                            |
|:-------|:----------------|:----------------------------------------|
| `GET`  | `/users`        | Get a list of all users                 |
| `GET`  | `/users/:id`    | Retrieve a specific user by their ID    |
| `POST` | `/users`        | Create a new user                       |
| `PUT`  | `/users/:id`    | Update an existing user by their ID     |
| `DELETE` | `/users/:id`  | Delete an existing user by their ID     |

## 🛠 [Stack Used](https://github.com/VanegasYW/APIRest-Basic/blob/master/techstack.md)
