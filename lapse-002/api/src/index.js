import express from "express"

const api = express()

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


api.listen(3030, () => console.log('API-LISTENING: 3030'))
