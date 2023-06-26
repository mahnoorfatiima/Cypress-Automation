import login from '../selectors/loginSelectors'

describe('Login Test', function(){
    it('can successfully login with correct username and password', function () {
        cy.login('mahnoor.fatima@dummy.com', 'test123')
        cy.contains(login.calendarTab, 'Calendar').should('be.visible')
    })

    it('can show error message on wrong username and password', function () {
        cy.login('wrong.username@dummy.com', 'test123')
        cy.get(login.error).should('be.visible').should('have.text','Invalid Username or Password.')
    })
})