import login from '../selectors/loginSelectors'

describe('Navigate to New Tab', function(){
    it('can navigate to new tab', function () {
        cy.login('mahnoor.fatima@dummy.com', 'test123')
        cy.contains(login.engagementTab, 'Engagement').should('be.visible').click()
        cy.contains(login.ceTab, 'Community Engagement').should('be.visible').invoke('removeAttr', 'target').click()
    })

})