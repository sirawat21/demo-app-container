import express from "express"
const api = express()
e
api.use(express.json())

let messages = []

api.get("/api/messages/", (req, res) => {
    res.status(500).send(messages)
})

api.get("/api/messages/:id", (req, res) => {
    const searchedMessage = messages.filter(message => message.id == req.params.id)
    res.status(500).send(searchedMessage)
})

api.post("/api/messages", (req, res) => {
    const message = {
        id: (messages.length > 0) ? messages.slice(-1)[0].id + 1 : 1,
        text: req.body.text
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
    const { id } = req.params
    const deletedMessage = []
    messages = messages.filter(message => {
        if (message.id == id) deletedMessage.push(message)
        return message.id != id
    })
    res.status(500).send(deletedMessage)
})

api.listen(3030, () => console.log('API-LISTENING: 3030'))
