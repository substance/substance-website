const express = require('express')
const next = require('next')
const api = require('./app/api')
const appRoutes = require('./app/appRoutes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    // Connect the Substance API
    api(server)

    // Connect the app routes
    appRoutes(server)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
