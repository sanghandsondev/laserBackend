const socket = io.connect('http://localhost:8000')

socket.on('connect', (data) => {
    socket.emit('join', 'Hello server from Client')   // truyền sự kiện 'joint' cho server
})


$('form').submit((e) => {    // GỬI TIN NHẮN ĐI
    e.preventDefault()
    const message = $('#message').val()
    socket.emit('messages', message) // truyền tin nhắn đi qua sự kiện 'messages' cho server

    // this.reset()   // xóa nội dung form
    $('#message').val() = ''
    return false   // bỏ đi hành vi mặc định của form
})

// lắng nghe sự kiện thread
socket.on('thread', (data) => {
    $('#thread').append(`<li> ${data} </li>`)
})