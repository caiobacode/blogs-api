<h1 align="center">📰  Blogs API  📷</h1>

<div align='center'>
<img width='300' alt="blogs-img" src="./blogs.jpg">
</div>

## Description
<p>Blogs API is a RESTful API for managing users, categories, and posts for a blog. The API was built with Node.JS/Express, and MySQL/Sequelize are used as database system.</p>

## 💻 Tecnologies used
> [![JavaScript][JavaScript]][JavaScript-url]
[![Node.js][Node.js]][Node.js-url]
[![EXPRESS][EXPRESS]][EXPRESS-url]
[![MYSQL][MYSQL]][MYSQL-url]
[![Sequelize][Sequelize]][Sequelize-url]
[![DOCKER][DOCKER]][DOCKER-url]

## 🛠️ Instructions

### Notes
>This project run in port 3000.<br/>
>You can run this API with Docker or Node, you choose!

### 📚 Requirements to run this project:
- Git.
- Node.js - v >= 16.0 (if you wanna run with Node).
- MySQL - (if you wanna run with Node).
- NPM - v >= 7.0 (if you wanna run with Node).
- Docker - (if you wanna run with Docker).
- Docker-Compose - (if you wanna run with Docker).


<details>
    <summary><strong>🐳 Run with Docker(Recommended) 🐳</strong></summary>
    
```bash
# Clone the repo
git clone git@github.com:caiobacode/api-store-manager.git

# Enter in repo
cd api-store-manager

# Run DockerCompose
docker-compose up -d
```
</details>

<details>
    <summary><strong>🟢 Run with Node.JS ⬢</strong></summary>

```bash
# Clone the repo
git clone https://github.com/caiobacode/api-talker-manager.git

# Enter in repo
cd api-talker-manager

# Install dependencies
npm install
```
Now, you need to config your MySQL database
- First, define environment variables in your .env file;

```bash
# Create databse
npm run restore

# Start the application
npm start
```

</details>

## 🔎 Additional details


<details>
    <summary><strong>🌐 API routes</strong></summary>

<br/>
    
> <strong>User Route</strong><br/>
- POST "/login" - Sign a user and return a JWT token.
- GET "/user" - Returns all users.<br/>
- GET "/user/:id" - Returns the user that has the id passed by the request.<br/>
- POST "/user" - Register a new user with the properties passed by the request.<br/>
- DELETE "/user/me" delete the own user that make this request<br/>

<br/>
    
> <strong>Categories Route</strong><br/>
+ GET "/categories" - Returns all categories.<br/>
+ POST "/sales" - Register a category with the properties passed by the request.<br/>

<br/>
    
> <strong>Posts Route</strong><br/>
- GET "/post" - Returns all posts.<br/>
- GET "/post/search" - Returns all posts that have the term passed by the request in their names.<br/>
- GET "/post/:id" - Returns the posts that has the id passed by the request.<br/>
- POST "/post" - Register a post with the properties passed by the request.<br/>
- PUT "/post/:id" - Edit a post properties to new properties passed by the request.<br/>
- DELETE "/post/:id" - Delete the post that has the id passed by the request<br/>

</details>

  <details>
    <summary><strong>✏️ What i learned</strong></summary>

+ Hot to create migrations and models using Sequelize
+ How to use Sequelize ORM to read and write to a MySQL database.
+ How to validate user token using JWT.
  
  </details>


[Node.js]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en

[JavaScript]: https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=node.js&logoColor=black
[JavaScript-url]: https://www.javascript.com

[Node.js]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en

[MYSQL]: https://img.shields.io/badge/MySQL-00758f?style=for-the-badge&logo=mysql&logoColor=white
[MYSQL-url]: https://www.mysql.com

[Sequelize]: https://img.shields.io/badge/Sequelize-06AFEF?style=for-the-badge&logo=sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org

[DOCKER]: https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white
[DOCKER-url]: https://www.docker.com

[EXPRESS]: https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=black
[EXPRESS-url]: https://expressjs.com
