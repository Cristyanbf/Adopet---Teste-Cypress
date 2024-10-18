describe('Página inicial', () => {
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    })
    it ('Verificar se "Quem ama adota!" e "Adotar pode mudar uma vida" está na página',()=>{
        cy.contains('Quem ama adota!').should('be.visible');
        cy.contains('Adotar pode mudar uma vida').should('be.visible');
        
    })


})

//Verificação sem intercorrencias!!