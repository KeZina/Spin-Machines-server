const server = require('http').createServer();
const io = require('socket.io')(server);
const chalk = require('chalk');

const CoreController = require('./controllers/core-controller'); 

const cl = console.log;

io.on('connection', socket => {
    cl(chalk.bgGreen.black('+1 socket :)'));

    socket.emit('quests', {
        progress: {
            quests: CoreController.quests,
            matrix: CoreController.matrix
        }
    })

    socket.on('getProgress', () => {
        CoreController.progress();
        socket.emit('quests', {
            progress: {
                quests: CoreController.quests,
                matrix: CoreController.matrix
            }
        })
    })

    socket.on('disconnect', socket => {
        cl(chalk.bgRed.black('-1 socket :('))
    })
})

const start = () => {
    try {
        server.listen(3003);
        cl(chalk.bgGreen.black(`Connection has been started`));
    } catch(e) {
        cl(chalk.bgRed.black(`Connection has been failed: ${e}`));
    }
}

start();