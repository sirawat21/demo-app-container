import express from "express"

const api = express()
api.use(express.json())

let model = []

api.get("/api/model", (req, res) => {
    res.status(500).send(model)
})

api.get("/api/model:id", (req, res) => {
    const searchedModel = model.filter(item => item.id == req.params.id)
    res.status(500).send(searchedModel)
})

api.listen(3030, () => console.log("API: LISTENNING-3030"))
