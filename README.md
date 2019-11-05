
# Teste CRUD NODE+MONGO+VUE+JWT (lista de tarefas)

# Requisitos Técnicos da Plataforma

* Docker > = 19.03.4
* docker-compose > =1.24.1

# Estrutura do Sistema

* Banco de dados MongoBD
* BackEnd Node.js com express.js
* FrontEnd Vue.js

# Para executar 

* Na Pasta mongo_db executar docker-compose up (-d), para subir o banco de dados (junto esta o mongo-express, opcional que  auxilia na visualização dos dados no banco)
* Na Pasta codigo_vue executar docker-compose up (-d), para subir o frontEnd Vue
* Na Pasta nodeJS executar docker-compose up (-d), para subir o backEnd

# Pastas 

* codigo_node : contém o codigo Node
* codigo_vue : contém o codigo Vue e os arquivos docker
* colecao_postman: contém um export das requisições para testar o bakend
* mongo_db: contém o arquivos docker e alguns de configuração do bd
* nodeJs: contém o arquivo docker

# Observação 

* Possiveis problemas com a conexão com o banco : (criar banco de dados e um usuario )  entrar na maquina docker ( por exemplo :docker exec -i -t mongo /bin/bash ), executar os comandos 1 - mongo -u admin -p admin, 2 - use teste_node_mongo 
3 - db.createUser(
        { user: "admin",
        pwd: "admin",
        roles:[{role: "dbOwner" , db:"teste_node_mongo"}]
        })

* Possiveis Problemas Frontend com CORS : Sugestão -> Desabilitar no navegador

* É possivel cadastrar usuario pelo postman o nome da requição é register 

# Desafio

Criar um CRUD que mantenha o cadastro de uma Pessoa Fisica com os campos: 
Id (auto incremento)
Nome
CPF (com validação de CPF)
E-mail
Data de Nascimento
Data do cadastro (campo interno de sistema preenchido automaticamente com a data atual no momento da inclusão)
 
Lista de Endereços
- Logradouro
- CEP
- Bairro
- Cidade
- UF
 
Lista de Telefones
-Telefone (com mascara e validação de 8 e 9 dígitos no telefone)
 
Para camada de persistência podem ser utilizadas as linguagens (Java, NodeJS ou Python) e para o Front-end Angular, Vue ou React. 
A escolha das linguagens fica a critério do candidato.
É obrigatório usar a arquitetura de microsserviços e conceito de Single Page Application.
É desejável que a a solução seja entregue funcionando no Docker 
Também devem ser entregues: 
a) Script de banco de dados para criação de tabelas
b) todo código fonte produzido no GitHub, o qual será avaliado quanto a sua clareza, objetividade e padrões seguidos.
c) Documentação para execução do código produzido.

# Sobre a Solução aplicada

* Endereço : o banco NoSQL permite que salve todos os dados como um objeto, para falicitar podemons só pedir o CEP para o Usuario e assim consultar um serviço para buscar o restante do enderço por um serviço como  o ViaCEP (viacep.com.br/ws/01001000/json/). Caso o banco fosse SQL teriamos que ter toda infrastrutura de CEP (Tabela) tem Logradoro (Tabela) tem uma cidade (Tabela) que tem um estado (Tabela) que tem um pais (Tabela) e suas chaves estrangeiras

* Telefone : Igualmente salvo como um array de String associado a um usuario, possui tambem uma validação de tamanho no backend (10 ~11 com 2 para o DD e 8 ou 9 digitos )

* CPF; validação no backend, ao criar o usuario ele testa para ver se o cpf é valido. Foi configurado tambem como unique no banco


# Usados no Node.js

+ body-parser@1.19.0
+ bcrypt@3.0.6
+ morgan@1.9.1
+ jsonwebtoken@8.5.1
+ express@4.17.1
+ mongoose@5.7.7