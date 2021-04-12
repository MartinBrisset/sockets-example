const socketController = (socket) => {

    console.log('cliente conectado');

    socket.on('disconnect', ()=> {
        console.log('cliente desconectado');
    })

    socket.on('enviar-mensaje', (payload)=> {

        socket.emit('enviar-mensaje', payload)        
        socket.broadcast.emit('enviar-mensaje', payload)        

    })
}

module.exports = {
    socketController
}