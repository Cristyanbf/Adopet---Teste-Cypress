describe('Página de login', () => {
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode:400, }).as('stubPost')
    })
    it('Inserir um e-mail e senha fora do padrão e clicar em login', () => {
       
        cy.login('cristyanplsc', 'enha123')
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
    it('Deve falhar mesmo com os campos corretos', ()=>{
        cy.login('cristyanplsc@hotmail.com', 'Senha123')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
  })

  //testei o incorreto e exibiu as mensagens necessárias!!

  // Assim que vê se tem algum texto em uma página:
  // cy.contains('Por favor, verifique o email digitado').should('be.visible');
  // cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');