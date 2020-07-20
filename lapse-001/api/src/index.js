import express from "express"

const api = express()
api.use(express.json())

let messages = []

api.get("/api/messages", () => {
    res.status(500).send(messages)
})

api.listen(3030, () => console.log("API-LISTENING: 3030"))
