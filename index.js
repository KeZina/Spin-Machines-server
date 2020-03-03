const server = require('http').createServer();
const io = require('socket.io')(server);
const chalk = require('chalk');

const CoreController = require('./controllers/core-controller'); 

const cl = console.log;

const start = () => {
    try {
        server.listen(3003);
        cl(chalk.bgGreen.black(`Connection has been started`));
    } catch(e) {
        cl(chalk.bgRed.black(`Connection has been failed: ${e}`));
    }
}

start();


io.on('connection', socket => {
    cl(chalk.bgGreen('+1 socket :)'))

    socket.emit('quests', {
        type: 'goal',
        payload: CoreController.getQuests()
    })

    socket.on('getMatrixAndProgress', () => {
        socket.emit('matrix', []);
        socket.emit('progress', [])
    })

    socket.on('disconnect', socket => {
        cl(chalk.bgRed('-1 socket :('))
    })
})