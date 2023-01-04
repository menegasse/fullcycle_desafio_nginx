const mysql = require('mysql')
const path = require('path');
const fs = require('fs')
const schema_path = path.join("schema")

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

connection.connect((error) => {
    if (error) throw error
    
    fs.readdir(schema_path, (error, files) => {
        if (error) throw error

        files.forEach((file_name)=>{
            let buffer = fs.readFileSync(`${schema_path}/${file_name}`);
            connection.query(buffer.toString())
        })
    })
})

module.exports = {connection}