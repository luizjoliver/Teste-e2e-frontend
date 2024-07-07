describe('Jornada de usuário ', () =>{
    it('Deve permitir que a pessoa acesse a aplicação , faça login , realize transações e faça um logout', () =>{
        cy.visit('/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('luiz@gmail.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq','/home')

        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('80')
        cy.getByData('realiza-transacao').click()

        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')

        cy.getByData('botao-sair').click()

        cy.location('pathname').should('eq','/')

        

    })

})