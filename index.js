const server = require('http').createServer();
const chalk = require('chalk');

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
