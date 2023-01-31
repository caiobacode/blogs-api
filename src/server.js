require('dotenv').config();
const app = require('./app');

const loginControler = require('./controllers/loginController');
const authLogin = require('./middlewares/validateLogin');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', authLogin, loginControler.login);

app.listen(port, () => console.log('ouvindo porta', port));
