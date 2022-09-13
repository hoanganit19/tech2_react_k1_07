const JWT_SECRET_KEY = require('./node_modules/json-server-auth/dist/constants').JWT_SECRET_KEY;
const auth = require('json-server-auth')
const express = require('express')
const server = express()

const jsonServer = require('json-server')
const jwt = require('jsonwebtoken');

const router = jsonServer.router('db.json')

server.get('/profile', auth, (req, res, next) => {

  const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;

  if (token) {

    const data = jwt.verify(token, JWT_SECRET_KEY)

    res.json(data);  

    try {
      const data = jwt.verify(token, JWT_SECRET_KEY)

      const { db } = req.app;
      let user = db.get('users').find({ email: data.email }).value();
      res.json([user])
    }
    catch (error) {
      res.json({ error: error })
    }

  } else {
    res.json({ error: { name: "User not authorized" } })
  }
});

server.db = router.db

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

server.use(auth);

server.listen(3001, () => {
    console.log('JSON Server is running: http://localhost:3001/profile');
})