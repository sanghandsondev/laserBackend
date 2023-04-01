const express = require('express')
const app = express()

const server = require('http').createServer(app)

const io = require('socket.io')(server)

app.use(express.static('public2'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public2/Calculator.html")
})

// BẮT CÁC SỰ KIỆN 
io.on('connection', (client) => {
    client.on('mess', (data) => {
        io.emit('hello', data)
    })


    // console.log('Client connecting..')
    // client.on('join', (data) => {    // bắt sự kiện 'joint' từ client
    //     console.log(data)
    // })

    // client.on('messages', (data) => {    // bắt sự kiện 'messgases' từ client
    //     client.emit('thread', data)     // truyền sự kiện 'thread' từ server lên cho client để hiển thị ra tin nhắn

    //     // broadcast: thông báo cho tất cả client connect vào server này đều đc nhận đc sự kiện 'thread'(cùng data) này
    //     client.broadcast.emit('thread', data)
    // })
})

server.listen(8000)