db.createUser({
    user: "user1",
    pwd: "1234",
    roles: [{
        role: "readWrite",
        db: "db1"
    }]
})
