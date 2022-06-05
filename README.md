# inf-22-dw2-g22

site_name: 
    -Social

repo_url: 
    -https://github.com/inf-22-dw2-g22/inf-22-dw2-g22.git



# SOCIAL
## _Troque informações, faça anuncios, realize suas vendas, procure emprego. Tudo em um só lugar_


Social  é uma rede social associada a uvem, pronta para todos os dispositivos, com armazenamento offline, desenvolvida em React, NodeJS e MySQL. 

- Encontre pessoas
- Faça anuncios
- Encontre emprego
- Faça amigos
- ✨Movimente a Vida✨


## Features

- Tenha acesso a uma comunidade de pessoas que procurar e precisam das mesmas coisas que você
- Tenha acesso a anuncios de emprego e de produtos
- Atraves da sua conta encontre, crie e edite anuncios de empregos
- Através da sua conta encontre, crie e edite anuncios de produtos
- Através da sua conta encontre, crie e edite anuncios de produtos


## Tech

SOCIAL utiliza diversas ferramentas opensource, tais como:

- [React] - é uma biblioteca de código aberto com foco em criar interfaces de usuário (frontend) em páginas web
- [node.js] - E/S com eventos para o back-end
- [Bootstrap] - great UI boilerplate for modern web apps
- [Express] - framework para servidor node.js
- [MySQL] - Para administração da base de dados
- [markdown] - Para documentação do sistema

## Installation

SOCIAL Requer [Node.js](https://nodejs.org/) v10+ para correr..

- Instalar as dependencias e dependencias de desenvolvimento para inicialização do server.

sh
cd social
npm i
node app

sh
cd express 
npm i
node app


- Para ambiente de desenvolvimento

sh
npm install --production
NODE_ENV=production node app


## Development

Want to contribute? Great!

SOCIAL utiliza nodeJS e express + JavaScript para seu desenvolvimento.
Faça alterações e veja suas modificações.

!!!!!!!!!!!!!!Se desejar, pode testar alterar nosso codigo. Abra seu terminal e rode os seguintes comandos:!!!!!!!!!!!!!!!!!!!

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

## Docker

SOCIAL is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd social
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=social <youruser>/social:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

    [SOCIAL]: <https://github.com/inf-22-dw2-g22/inf-22-dw2-g22.git>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [express]: <http://expressjs.com>
  

 
