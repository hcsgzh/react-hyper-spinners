const React = require('react')
const express = require('express')
const ReactDOM = require('react-dom/server')
const { Grid } = require('react-hyper-spinners')

const port = 3000

const app = express()

app.get('*', (req, res) => {
  const el = React.createElement(Grid)

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
