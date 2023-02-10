
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function propriedadesdoCSS() {
  rl.question('Digite propriedades do CSS que deseja separadas por vírgulas ou digite "sair": ', (answer) => {
    if (answer === 'sair') {
      console.log('Encerrado');
      rl.close();
    } else {
      let PropriedadeCSS = answer.split(',');
      console.log('Propriedades CSS desejadas:');
      console.log(PropriedadeCSS);
      propriedadesdoCSS();
    }
  });
}

propriedadesdoCSS();









