require('dotenv').config();
const app = require('./app');

const loginControler = require('./controllers/loginController');
const authLogin = require('./middlewares/validateLogin');

const userControler = require('./controllers/userController');
const authToken = require('./token/validateToken');
const { authName, authEmail, authPassword } = require('./middlewares/validateUser');

const categoryControler = require('./controllers/categoryController');
const { authCategoryName } = require('./middlewares/validateCategory');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', authLogin, loginControler.login);

app.post('/user', authName, authEmail, authPassword, userControler.postUser);

app.get('/user', authToken, userControler.getUsers);

app.get('/user/:id', authToken, userControler.getUserById);

app.post('/categories', authToken, authCategoryName, categoryControler.postCategory);

app.listen(port, () => console.log('ouvindo porta', port));
