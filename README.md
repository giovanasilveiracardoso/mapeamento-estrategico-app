# MapeamentoEstrategicoApp

Pré-requisitos:
---------------
1 - NodeJs versão 10.15.3 - https://nodejs.org/en/download/:
Instalação exemplo no linux https://github.com/nodejs/help/wiki/Installation

2 - Angular CLI versão 7.3.5:
    ``$ npm install -g @angular/cli``

3 - Confira a versão instalada:
    ``$ ng version``

Executando:
-------------------
1 - git clone https://github.com/giovanasilveiracardoso/mapeamento-estrategico-app.git

2 - Acesse a pasta do projeto:
    ``$ cd mapeamento-estrategico-app``

3 - Instale as dependências:
    ``$ npm install``

4 - Para que os dados apareçam na aplicação é necessário que o serviço do projeto 'https://github.com/giovanasilveiracardoso/mapeamento-estrategico.git' esteja ativo.

5 - Inicialize a aplicação:
    ``$ ng serve --proxy-config proxy.config.js``
    '--proxy-config proxy.config.js' é necessário para contornar o erro de CORS no ambiente de desenvolvimento.

6 - Acesse através do browser:
	http://localhost:4200/
	