describe('Página de cadastro', () => {

  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
  })
  it('Preencher os campos de formulário de forma correta para cadastrar um novo usuário.', () => {
      
   cy.cadastrar('Cristyan Bernardo Fernandes','cristyanplsc@hotmail.com','Senha123')

  })
})