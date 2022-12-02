const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
server.use(middlewares)
server.use(router)
server.listen(4000, () => {
  console.log('Congrates!,You have runned the JSON Server...^_^')
})