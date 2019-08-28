const React = require('react')
const express = require('express')
const ReactDOM = require('react-dom/server')
const { Grid, Blocks, Hourglass, Circles } = require('react-hyper-spinners')

const port = 3000

const app = express()

app.get('*', (req, res) => {
  const el = React.createElement(
    React.Fragment,
    null,
    React.createElement(Grid),
    React.createElement(Blocks),
    React.createElement(Hourglass),
    React.createElement(Circles)
  )

  const html = ReactDOM.renderToString(el)
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body >
        ${html}
    </body>
    </html>    
    `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
