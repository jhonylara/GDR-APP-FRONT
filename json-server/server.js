const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('json-server/database.json')
const userdb = JSON.parse(fs.readFileSync('json-server/users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresIn = '1h'
// Create a token from a payload
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function getUser({email, password}){
  return userdb.users.find(user => user.email === email && user.password === password)
}

server.post('/auth', (req, res) => {
  const {email, password} = req.body;
  const user = getUser({email: email, password});
  if (!user) {
    const status = 401;
    const message = 'Incorrect name or password';
    res.status(status).json({status, message});
    return;
  }
  const access_token = createToken({name: email, password});
  let responseBody = JSON.parse(JSON.stringify(user));
  delete responseBody.password;
  responseBody.token = access_token;
  res.status(200).send(responseBody);
})

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({status, message})
    return
  }
  try {
     verifyToken(req.headers.authorization.split(' ')[1])
     next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({status, message})
  }
})

server.use(router)

server.listen(3000, () => {
  console.log('Run Auth API Server')
})
