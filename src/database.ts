import mysql, { createPool } from 'promise-mysql'
import keys from './keys'


const pool = mysql.createPool(keys.database);
pool.getConnection()
    .then((connection) => {

    pool.releaseConnection(connection);
    console.log("db connected")

})

export default pool;