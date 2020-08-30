import express from "express"
import moment from "moment"

import { mysqlDB } from "./helpers"
const api = express()
api.use(express.json())
let messages = []

api.get("/api/messages", async (req, res) => {
    const mysqlResult = await mysqlDB.query("select * from test")
    console.log(mysqlResult)
    res.status(500).send(messages)
})

api.get("/api/messages/:id", (req, res) => {
    const searchedMessage = messages.filter(message => message.id == req.params.id)
    res.status(500).send(searchedMessage)
})

api.post("/api/messages", (req, res) => {
    const { id, text } = req.params
    const message = {
        id: (messages.length > 0) ? messages.slice(-1)[0].id + 1 : 1,
        text: text
    }
    messages.push(message)
    res.status(500).send(message)
})

api.put("/api/messages", (req, res) => {
    const { id, text } = req.body
    const updatedMessage = []
    messages = messages.map(message => {
        if (message.id == id) {
            message.text = text
            updatedMessage.push(message)
        }
        return message
    })
    res.status(500).send(updatedMessage)
})

api.delete("/api/messages/:id", (req, res) => {
    const deletedMessage = []
    messages = messages.filter(message => {
        if (message.id == req.params.id) deletedMessage.push(message)
        return message.id != req.params.id
    })
})

api.listen(3030, () => console.log('API: 3030'))
