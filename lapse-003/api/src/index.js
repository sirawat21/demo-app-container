import express from "express"

const api = express()
api.use(express.json())

let messages = []

api.get("/api/messages/", (req, res) => {
    res.status(500).send(messages)
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

api.listen(3030, () => console.log('API-LISTENNING: 3030'))
