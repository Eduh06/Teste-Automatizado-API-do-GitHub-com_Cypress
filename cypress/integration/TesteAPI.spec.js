describe('Testes da API do GitHub', () => {
  const repositorioNome = 'TesteQA'; 
  const issueTitulo = 'Issue de teste';
  const issueCorpo = 'Corpo da issue de teste'; 
  let repositorioUrl;
  let issueNumero;

  it('Deve criar um novo repositório', () => {
      cy.request({
          method: 'POST',
          url: 'https://api.github.com/user/repos',
          headers: {
              Authorization: `Bearer ${Cypress.env('TOKEN')}`,
          },
          body: {
              name: repositorioNome,
              private: false,
              description: 'Repositório de teste criado pelo Cypress',
          },
          Timeout: 1000000
      }).then(response => {
          expect(response.status).to.eq(201);
          repositorioUrl = response.body.html_url;
          cy.wrap(repositorioUrl).as('repositorioUrl');

          // Verificação dos campos específicos da resposta
          expect(response.body.name).to.eq(repositorioNome);
          expect(response.body.private).to.eq(false);
          expect(response.body.description).to.eq('Repositório de teste criado pelo Cypress');
      });
  });

  it('Deve criar uma issue no repositório recém-criado', () => {
      cy.request({
          method: 'POST',
          url: `https://api.github.com/repos/${Cypress.env('usuário')}/${repositorioNome}/issues`,
          headers: {
              Authorization: `Bearer ${Cypress.env('TOKEN')}`,
          },
          body: {
              title: issueTitulo,
              body: issueCorpo,
          },
      }).then(response => {
          expect(response.status).to.eq(201);
          issueNumero = response.body.number;

          // Verificação dos campos específicos da resposta
          expect(response.body.title).to.eq(issueTitulo);
          expect(response.body.body).to.eq(issueCorpo);
      });
  });

  it('Deve consultar a issue criada', () => {
      cy.request({
          method: 'GET',
          url: `https://api.github.com/repos/${Cypress.env('usuário')}/${repositorioNome}/issues/${issueNumero}`,
          headers: {
              Authorization: `Bearer ${Cypress.env('TOKEN')}`,
          },
      }).then(response => {
          expect(response.status).to.eq(200);

          expect(response.body.title).to.eq(issueTitulo);
          expect(response.body.body).to.eq(issueCorpo);
      });
  });

  it('Deve excluir o repositório', () => {
      cy.request({
          method: 'DELETE',
          url: `https://api.github.com/repos/${Cypress.env('usuário')}/${repositorioNome}`,
          headers: {
              Authorization: `Bearer ${Cypress.env('TOKEN')}`,
          },
      }).then(response => {
          expect(response.status).to.eq(204);
      });
  });

  it('Deve consultar se o repositório foi eliminado', () => {
      cy.request({
          method: 'GET',
          url: `https://api.github.com/repos/${Cypress.env('usuário')}/${repositorioNome}`,
          headers: {
              Authorization: `Bearer ${Cypress.env('TOKEN')}`,
          },
          failOnStatusCode: false,
      }).then(response => {
          expect(response.status).to.eq(404);
      });
  });
});
