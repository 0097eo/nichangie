const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'FAPI',
    password: 'kothbiro',
    port: 5432,
})


module.exports = pool