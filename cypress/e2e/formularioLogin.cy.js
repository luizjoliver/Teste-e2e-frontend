describe("Formulário de login " , () =>{
    beforeEach(() =>{
        cy.visit('/')
    })
//exemplo de testes em inglês 
    it('should not allow invalid email', () =>{
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('luiz@alura')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O email digitado é inválido')
    })

    it.only('should not allow empty inputs' , () =>{
        cy.getByData('botao-login').click()
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo email é obrigatório')
    })
})