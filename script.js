//EXECUTE O ARQUIVO DIRETO NO TERMINAL, PELO HTML ESTÁ DANDO ERRO

import chalk from 'chalk';

console.log(chalk.red('Hello world!'));

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));