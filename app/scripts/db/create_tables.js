#!/usr/bin/env node

const {connection} = require('../../lib/db/mysql')
const path = require('path');
const fs = require('fs')
const schema_path = path.join("schema")

fs.readdir(schema_path, (error, files) => {
    if (error) throw error

    files.forEach((file_name)=>{
        let buffer = fs.readFileSync(`${schema_path}/${file_name}`);
        connection.query(buffer.toString())
    })
    connection.end()
})