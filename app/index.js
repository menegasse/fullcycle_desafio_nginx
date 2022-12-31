const moment = require('moment')
const {connection} = require('./lib/db/mysql')
const express = require('express')
const {faker} = require('@faker-js/faker')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    let now = moment().format("YYYY-MM-DD hh:mm:ss");
    let name =  `${faker.name.firstName()} ${faker.name.lastName()}`

    // INSERT new user
    connection.query(`INSERT INTO people (name, created_at) VALUES ('${name}', '${now}');`)

    // LIST all users
    connection.query('SELECT * FROM people;', (error, result, fields) => {
        if (error) throw error

        let html = `<h1>Full Cycle Rocks!</h1> 
                    <ol>
                        ${result.length == 0 ? 
                          '<li>Nenhum usuário cadastrado</li>' :
                          result.reduce(
                            (accumulator, value) => accumulator + 
                            `<li>${moment(value.created_at).format('DD/MM/YYYY hh:mm:ss')} - ${value.name}</li>`,
                            "",
                        )}
                    </ol>`
        res.send(html)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta: ' + port)
})