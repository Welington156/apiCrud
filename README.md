# API – Node.js + Express
API leve e modular desenvolvida com Node.js e Express, que expõe informações do portfólio de forma organizada e escalável. Ideal para ser usada como microsserviço de apresentação ou ponto de integração com sites e front-ends.

## 🔧 Tecnologias utilizadas
Node.js + Express

CORS, Morgan (logs), dotenv

Modularização com rotas separadas

Versionamento com Git

Deploy facilitado com Procfile (Heroku)

## 📌 Funcionalidades
GET / – Verificação de status da API ({ msg: "OK" })

GET /about – Retorna nome do autor e URLs úteis (ex: GitHub)

## 🚀 Recursos extras
Suporte a variáveis de ambiente (.env)

Middleware de log e tratamento de rotas 404

Pronto para deploy em ambientes como Heroku ou Railway

Estrutura pronta para escalar novas rotas e integrações

## 📁 Organização
src/app.js – Middlewares e rotas

src/server.js – Inicialização do servidor

src/routes/ – Rotas modulares (index e about)

.env.example – Template de configuração

Procfile – Configuração de execução para produção
