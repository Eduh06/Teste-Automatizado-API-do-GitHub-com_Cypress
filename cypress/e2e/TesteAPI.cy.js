const dados = {
    repositorioNome: 'TesteQA',
    issueTitulo: 'Issue de teste',
    issueCorpo: 'Corpo da issue de teste',
    usuarioInexistente: 'eduuarddooo'
  };
  
  const baseUrlRepos = 'https://api.github.com';

  let repositorioUrl;
  let issueNumero;
  
  context('Cenários positivos', () => {
    it('Deve criar um novo repositório', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrlRepos}/user/repos`,
        headers: {
          Authorization: `Bearer ${Cypress.env('TOKEN')}`,
        },
        body: {
          name: dados.repositorioNome,
          private: false,
          description: 'Repositório de teste criado pelo Cypress',
        },
      }).then(response => {
        expect(response.status).to.eq(201);
        repositorioUrl = response.body.html_url;
        cy.wrap(repositorioUrl).as('repositorioUrl');
        expect(response.body.name).to.eq(dados.repositorioNome);
        expect(response.body.private).to.eq(false);
        expect(response.body.description).to.eq('Repositório de teste criado pelo Cypress');
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('created_at');
        expect(response.body).to.have.property('updated_at');
      });
    });
  
    it('Deve consultar o repositório criado', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrlRepos}/repos/${Cypress.env('user')}/${dados.repositorioNome}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('TOKEN')}`,
        },
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(dados.repositorioNome);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('created_at');
        expect(response.body).to.have.property('updated_at');
      });
    });
  
    it('Deve criar uma issue no repositório recém-criado', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrlRepos}/repos/${Cypress.env('user')}/${dados.repositorioNome}/issues`,
        headers: {
          Authorization: `Bearer ${Cypress.env('TOKEN')}`,
        },
        body: {
          title: dados.issueTitulo,
          body: dados.issueCorpo,
        },
      }).then(response => {
        expect(response.status).to.eq(201);
        issueNumero = response.body.number;
        expect(response.body.title).to.eq(dados.issueTitulo);
        expect(response.body.body).to.eq(dados.issueCorpo);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('created_at');
        expect(response.body).to.have.property('updated_at');
        expect(response.body.user).to.have.property('login');
      });
    });
  
    it('Deve consultar a issue criada', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrlRepos}/repos/${Cypress.env('user')}/${dados.repositorioNome}/issues/${issueNumero}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('TOKEN')}`,
        },
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq(dados.issueTitulo);
        expect(response.body.body).to.eq(dados.issueCorpo);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('created_at');
        expect(response.body).to.have.property('updated_at');
        expect(response.body.user).to.have.property('login');
      });
    });
  
    it('Deve excluir o repositório', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrlRepos}/repos/${Cypress.env('user')}/${dados.repositorioNome}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('TOKEN')}`,
        },
      }).then(response => {
        expect(response.status).to.eq(204);
      });
    });
  });
  
  context('Cenários negativos', () => {
    it('Deve consultar se o repositório foi eliminado', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrlRepos}/repos/${Cypress.env('user')}/${dados.repositorioNome}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('TOKEN')}`,
        },
        failOnStatusCode: false, 
      }).then(response => {
        expect(response.status).to.eq(404);
      });
    });
  
    it('Deve retornar 404 ao buscar um usuário que não existe', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrlRepos}/users/${dados.usuarioInexistente}`,
        failOnStatusCode: false 
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.message).to.eq('Not Found');
      }); 
    });
  
    it('Deve retornar erro ao tentar criar um repositório sem nome válido', () => {
        cy.request({
          method: 'POST',
          url: `${baseUrlRepos}/user/repos`,
          headers: {
            Authorization: `Bearer ${Cypress.env('TOKEN')}`,
          },
          body: {
            name: '',  // Nome vazio
            private: false,
            description: 'Repositório sem nome válido',
          },
          failOnStatusCode: false,
        }).then(response => {
          expect(response.status).to.eq(422);  // Expectativa de erro 422, pois o nome é obrigatório
          expect(response.body.message).to.include('New repository name must not be blank');
        });
      });


    it('Deve retornar erro ao tentar fazer uma solicitação sem token de autenticação', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrlRepos}/user/repos`,
            body: {
            name: 'RepoSemToken',
            private: false,
            description: 'Repositório criado sem token',
            },
            failOnStatusCode: false,  // Impede falha automática
        }).then(response => {
            expect(response.status).to.eq(401);  // Espera o código de status 401 (Unauthorized)
            expect(response.body.message).to.eq('Requires authentication');
        });
    });

});
  