
describe('Api Adopet', () => {

            it('Mensagens', () => {
                cy.request({
                    method: 'GET' ,
                    url: 'https://adopetapi-pgks.onrender.com/mensagem/14451c6b-5431-4bbe-8851-56b85633f360',
                    headers: Cypress.env()
                   
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('msg')
                            
                })
            })
        })