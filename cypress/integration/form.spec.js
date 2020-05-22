describe('Navigate to order form, check inputs, check name validation, check submission', () => {

    it('Can navigate to form', () => {
        cy.visit('http://localhost:3000/pizza');
    });

    it('Add name, verify matches expected input', () => {
        cy.get('input[name="name"]')
            .type('D')
            .should('have.value', 'D')
    });

    it('Check for "Name must be at least 2 characters" message, appears and disappears when expected, submit button disabled and enabled.', () => {
        cy.get('.submit-button').should('be.disabled')
        cy.contains('Name must be at least 2 characters')
        cy.get('input[name="name"]')
            .type('rew')
            .should('have.value', 'Drew')
        cy.contains('Name must be at least 2 characters').should('not.exist')
        cy.get('.submit-button').should('not.be.disabled')
    })

    it('Check pizza size can be changed', () => {
        cy.get('select[name="size"]')
            .select('Medium').should('have.value', 'medium')
            .select('Large').should('have.value', 'large')
            .select('Small').should('have.value', 'small')
    })

    it('Checkboxes can be checked and unchecked', () => {
        cy.get('input[name="pepperoni"]').check()
            .should('be.checked').uncheck().should('not.be.checked')
        cy.get('input[name="olives"]').check()
            .should('be.checked').uncheck().should('not.be.checked')
        cy.get('input[name="mushrooms"]').check()
            .should('be.checked').uncheck().should('not.be.checked')
        cy.get('input[name="spinach"]').check()
            .should('be.checked').uncheck().should('not.be.checked')
        cy.get('input[name="mushrooms"]').check()
        cy.get('input[name="olives"]').check()
    })

    it('Can type special instructions', () => {
        cy.get('textarea[name="instructions"]')
            .type('Leave pizza on the porch, take the money')
            .should('have.value', 'Leave pizza on the porch, take the money')
    });

    it('Can submit order', () => {
        cy.get('.submit-button').click()
        cy.wait(2000)
        cy.contains('Order sent')
    })
})