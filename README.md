# Teste Automatizado com Cypress para API do GitHub

Este é um projeto de teste automatizado desenvolvido com o Cypress para testar a API do GitHub. Atualmente, abrange desde a validação de funcionalidades principais até a implementação de cenários negativos.

#### Na primeira etapa do projeto, foram desenvolvidas as seguintes funcionalidades:

- Criação de repositórios
- Criação de issues
- Consulta de repositórios e issues
- Exclusão de repositórios
- Consulta de Exclusão de repositório
 
#### Na segunda etapa, Foram adicionadas as seguintes melhorias:

- Adição de mais validações (expect) nos testes para garantir maior robustez.
- Melhoria nas mensagens de asserção, tornando os retornos mais claros e objetivos.
- Implementação de cenários de teste negativos para validar comportamentos de exceção (por exemplo, tentativas inválidas ou sem autenticação).
- Separação de cenários positivos e negativos utilizando context()

#### A próxima etapa planejada é a implementação da execução contínua dos testes automatizados via GitHub Actions


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

3. **Configuração do Cypress**: Adicione as variáveis de ambiente necessárias ao arquivo `cypress.config.js`. 
   
        {
         "env": {
           "user": "SubstituirPeloNomeDeUsuárioDoGitHub",
           "TOKEN": "SubstituirPeloTokenDeAcesso"
         }
        }

4. **Cypress**: Certifique-se de ter o Cypress e o Node.js instalados no seu ambiente de desenvolvimento. Se não tiver, você pode instalá-los seguindo os passos abaixo:

   ##### Instalar o Node.js:
   Antes de instalar o Cypress, certifique-se de ter o Node.js instalado. Você pode baixá-lo e instalá-lo a partir do site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)

   ##### Instalar o Cypress:
   Você pode instalar o Cypress usando o seguinte comando:

   
       npm install cypress --save-dev

OBS: Executar o comando dentro da pasta do projeto. Você pode acessar através do comando :

      cd Teste-Automatizado-API-do-GitHub-com_Cypress

OBS 2: Para a execução dos testes, é necessário ter, no mínimo, o Cypress na versão 10 ou superior.

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
Clique no arquivo de teste TesteAPI.spec.js para executar os cenários.


