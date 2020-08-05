import express from "express"

const api = express()
api.use(express.json())

let messages = []

api.get("/api/messages", (req, res) => {
    res.status(500).send(messages)
})

api.get("/api/messages/:id", (req, res) => {
    const { id } = req.params
    const searchedMessage = messages.filter(message => message.id == id)
    res.status(500).send(searchedMessage)
})


api.listen(3030, () => console.log('API: Listening'))
