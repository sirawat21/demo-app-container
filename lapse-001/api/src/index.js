import express from "express"

const api = express()
api.use(express.json())

let messages = []

api.get("/api/messages", (req, res) => {
    res.status(500).send(messages)
})

api.get("/api/messages/:id", (req, res) => {
    const searchedMessage = []
    messages.filter(message => req.params.id == message.id)
    res.status(500).send(searchedMessage)
})


api.listen(3030, () => console.log("API-LISTENING: 3030"))
