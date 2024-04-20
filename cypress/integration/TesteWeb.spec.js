describe('Teste do Website da Zitrus', () => {
  
  it('Deve navegar da página inicial até a página de carreiras e verificar os elementos', () => {
    cy.viewport(1920, 1080);
    
    //Dado que estou na página inicial da Zitrus  
    cy.visit('https://zitrus.com.br/');
      cy.wait(4000);
 
    // E clico no botão "Carreiras"
    cy.get('.elementor-sticky--active .elementor-nav-menu--layout-horizontal .menu-item-3423 a')
      .should('be.visible')  
      .click();              
              
    // Quando o website redirecionar para a página de carreiras
    cy.url().should('include', '/carreiras');
      cy.wait(2000);
             
    //Então devo verificar o texto 'Acesse as vagas e se inscreva pelo link abaixo.'    
    cy.contains('Acesse as vagas e se inscreva pelo link abaixo.').should('exist');
       
    //E devo verificar o botão Acessar Vagas
    cy.get('#content .elementor-button-link').should('exist');

  });
            
  it('Deve retornar mensagem de erro ao não preencher o campo obrigatório Empresa', () => {      
    const CampoNome = '#rd-text_field-lagu3sy8';
    const CampoEmail = '#rd-email_field-lagu3sy9';
    
    cy.viewport(1920, 1080);

    // Dado que estou na página de contato do website da Zitrus
    cy.visit('https://zitrus.com.br/Contato');
      cy.wait(3000);
 
    // Quando preencho o formulario de contato sem preencher o campo obrigatório "Empresa"
    cy.get(CampoNome).clear().type('Nome Teste');
    cy.get(CampoEmail).clear().type('exemplo@email.com');

    // E clico no botão enviar
    cy.contains('Enviar').click();
    
    // Então devo ver a mensagem de erro "Campo obrigatório
    cy.contains('Campo obrigatório').should('be.visible');
  });

});
