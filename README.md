# Cypress Basic

Este projeto foi criado com o intuito de estudar um pouco mais sobre cypress, através do curso [Cypress Básico,](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/) da escola [Talking About Test](https://talkingabouttesting.coursify.me/), ministrado pelo [Walmyr Filho](https://www.linkedin.com/in/walmyr-lima-e-silva-filho-147a9110a/).
O projeto consiste na automação de alguns fluxos do site [Tickets](https://ticket-box.s3.eu-central-1.amazonaws.com/index.html), que foram feitos para que alguns conceitos do framework fossem aplicados. 

### Instalação e Execução
Para rodar o projeto, você precisará do [NodeJS](https://nodejs.org/en/download/) e do [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instalados. 
Após ter ambos instalados, rode o comando: 
`npm install -g cypress --save-dev`
Para rodar os testes, após ter instalado o cypress com o comando acima, navegue para a pasta raiz do projeto e execute:
`npm test`
ou
`npx cypress run`

### Conceitos apicados:
- Visitando url's
- Preenchendo campos do tipo texto
- Preenchendo campos do tipo checkbox
- Preenchendo campos do tipo radiobutton
- Criando e utilizando alias para elementos
- Realizando asserts
- Criando comandos personalizados
- Rodando os testes no CI
