describe("Formulário Cadastro " , () =>{
    beforeEach(() =>{
        cy.visit('/')
    })


    it('O usuário deve conseguir se cadastrar com sucesso ', () =>{
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Gui Lima')
        cy.getByData('email-input').type('Gui2@email.com')
        cy.getByData('senha-input').type('1223456789')
        cy.getByData('botao-enviar').click()

        cy.getByData('mensagem-sucesso').should('exist').and('have.text','Usuário cadastrado com sucesso!')
    })


})