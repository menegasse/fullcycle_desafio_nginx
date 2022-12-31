# Desafio nginx com Node.js

> Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação nodejs. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
>
> O retorno da aplicação node.js para o nginx deverá ser:
>
> <h1>Full Cycle Rocks!</h1>
>
> \- Lista de nomes cadastrada no banco de dados.
>
> Gere o docker-compose de uma forma que basta apenas rodarmos: `docker-compose up -d` que tudo deverá estar funcionando e disponível na porta: 8080.
>
> Suba tudo em um repositório e faça a entrega.
>
> \- A linguagem de programação para este desafio é Node/JavaScript.

# Configurando o projeto

Instalando as dependências da aplicação

```bash
make install-app
```

Criar o Schema do Banco de Dados.

```bash
make db-create-table
```

# Iniciando o projeto

```bash
make run-local
```

Se tudo estiver rodando corretamente ao entrar no link http://localhost:8080 devera adicionar um novo nome a lista.