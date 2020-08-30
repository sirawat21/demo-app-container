import mysql from "mysql"
import { promisify } from "util"

let mysqlDB = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "user1",
    password: "1234",
    database: "db1"
})

mysqlDB.getConnection((error, connection) => {
    if (error) {
        if (error.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Lost connection")
        }
        if (error.code === "ER_CON_COUNT_ERROR") {
            console.error("overload connection")
        }
        if (error.code === "ECONNREFUSED") {
            console.error("refused connection")
        }
    }
    if (connection) connection.release()
})

mysqlDB.query = promisify(mysqlDB.query)

export default mysqlDB
