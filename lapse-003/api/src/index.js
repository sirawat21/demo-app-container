import express from "express"
import { validate } from "./helpers/validate.js"
const api = express()
api.use(express.json())

let messages = []

api.get("/api/messages/", (req, res) => {
    // const result = validate("")
    res.status(500).send(result)
})

api.get("/api/messages/:id", (req, res) => {
    const { id } = req.params
    const searchedMessage = messages.filter(message => message.id != id)
    res.status(500).send(searchedMessage)
})

api.post("/api/messages", (req, res) => {
    const { id, text } = req.body
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

api.delete("/api/message/:id", (req, res) => {
    const { id } = req.params
    const deletedMessage = []
    messages = messages.filter(message => {
        if (message.id == id) deletedMessage.push(message)
        return message.id != id
    })
    res.status(500).send(deletedMessage)
})

api.listen(3030, () => console.log('API: 3030'))
