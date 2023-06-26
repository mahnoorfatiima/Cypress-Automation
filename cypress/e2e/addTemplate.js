import template from '../selectors/templateSelectors'

describe('Add Template Test', function(){
    const at = Date.now()

    beforeEach(() => {
        cy.login('mahnoor.fatima@dummy.com', 'test123')
        cy.contains(template.messagingTab, 'Messaging').should('be.visible').click()
        cy.contains(template.templateTab, 'Templates').should('be.visible').click()
    })

    it('can add a new template', function () {
        //create template STEP#1 (General Info)
        cy.get(template.addTemplateBtn).should('have.text', 'Add New Template').click()
        cy.get(template.nameField).type('Automated Name from C ' + at) //using 'at' as current timestamp to generate new data for every test run
        cy.get(template.descriptionField).type('Automated Description' + at)
        cy.get(template.locationField).type('Automated Location')
        cy.get(template.nextBtn).click()
        //create template STEP#2 (Distribution List)
        cy.get(template.namesList).each(($el, index, $list) => {
            if ($el.find('span').text() === 'Resident 12') {
                cy.wrap($el).click()
            }
        })
        cy.get(template.selectedName).should('have.text', 'Resident 12')
        cy.get(template.nextBtn).click()
        //create template STEP#3 (Select Content)
        cy.get(template.addTextBtn).should('have.text', 'Add Text Message content').click()
        cy.get(template.heading).contains('Text Message Content')
        cy.get(template.textMsgField).type('Automated text message sent by Icon')
        cy.get(template.textMsgField).should('have.attr', 'maxlength', '600')
        cy.get(template.saveBtn).first().click()
        cy.get(template.successAlert).and('have.text', 'Template successfully updated')
        cy.get(template.col).eq(2).should('have.text', 'Automated Name from C ' + at)
        cy.get(template.col).eq(3).should('have.text', 'Automated Description' + at)
    })
})