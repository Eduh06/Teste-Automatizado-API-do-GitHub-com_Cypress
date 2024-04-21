# Teste Automatizado com Cypress para API do GitHub

Este é um projeto de teste automatizado desenvolvido com o Cypress para testar a API do GitHub. Este projeto realiza testes automatizados na API do GitHub para garantir o correto funcionamento das seguintes funcionalidades:

- Criação de repositórios
- Criação de issues
- Consulta de repositórios e issues
- Exclusão de repositórios
- Consulta de Exclusão de repositório
 
## Como baixar o projeto

Para baixar o projeto, siga estas etapas:

1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório onde deseja clonar o projeto.
3. Execute o seguinte comando:

       git clone https://github.com/Eduh06/Teste-Automatizado-API-do-GitHub-com_Cypress.git

## Configurações

Antes de executar os testes, é necessário configurar algumas variáveis de ambiente:

1. **Token de Acesso do GitHub**: Você precisará de um token de acesso pessoal do GitHub com permissões para criar repositórios, issues e excluir repositórios. Você pode gerar um token de acesso seguindo as instruções [aqui](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

2. **Usuário do GitHub**: Seu nome de usuário do GitHub.

3. **Configuração do Cypress**: Adicione as variáveis de ambiente necessárias ao arquivo `cypress.json`. 
   
        {
         "env": {
           "usuário": "SubstituirPeloNomeDeUsuárioDoGitHub",
           "TOKEN": "SubstituirPeloTokenDeAcesso"
         }
        }

4. **Cypress**: Certifique-se de ter o Cypress e o Node.js instalados no seu ambiente de desenvolvimento. Se não tiver, você pode instalá-los seguindo os passos abaixo:

   ##### Instalar o Node.js:
   Antes de instalar o Cypress, certifique-se de ter o Node.js instalado. Você pode baixá-lo e instalá-lo a partir do site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)

   ##### Instalar o Cypress:
   Você pode instalar o Cypress globalmente usando o seguinte comando:

   
       npm install cypress --save-dev


## Como executar os testes

Após configurar as variáveis de ambiente, você pode escolher entre duas maneiras de executar os testes:

### Comando Cypress Run (Modo Headless)

Para executar os testes no modo headless (sem interface gráfica), use o seguinte comando na raiz do projeto:

     npx cypress run


Este comando iniciará a execução dos testes automatizados usando o Cypress no modo headless. Os resultados serão exibidos no console.

### Comando Cypress Open (Modo Interativo)

Para executar os testes no modo interativo (com interface gráfica), use o seguinte comando na raiz do projeto:

      npx cypress open


Esse comando abrirá o Cypress Test Runner, onde será possivel interagir com os testes em tempo real, verificar os resultados detalhados e depurar os testes conforme necessário.


