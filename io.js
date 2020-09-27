module.exports = (serv) => {
    var io = require('socket.io')(serv)
    io.on('connection', (socket) => {

        console.log("connected")
            // socket.io server side goes here
        socket.on("hello", (d) => {
            console.log(d)
            socket.emit("hello", "you are connect to socket.io")
        })

    })
    return io
}