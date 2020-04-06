describe('Happy path', function () {
    it('Can I fill out a form', function () {
        cy.visit('https://csb-idv4r.netlify.com/')

        cy.contains('Tell us about yourself')

        cy.get('input[name=address1]').type('1100 Congress Ave').should('have.value', '1100 Congress Ave')
        cy.get('input[name=address2]').type('unit B').should('have.value', 'unit B')
        cy.get('input[name=city]').type('Austin').should('have.value', 'Austin')
        cy.get('select').select('TX')
        cy.get('input[name=zipCode]').type('78701').should('have.value', '78701')

        cy.get('input[name=phone]').type('512-555-1212').should('have.value', '512-555-1212')
        cy.get('input[name=email]').type('name@example.com').should('have.value', 'name@example.com')

        cy.get('input[name=dobMonth]').type('1').should('have.value', '1')
        cy.get('input[name=dobDay]').type('2').should('have.value', '2')
        cy.get('input[name=dobYear]').type('2000').should('have.value', '2000')

        cy.get('button[type=submit]').click()

        cy.get('div').contains('Address 1').parent().should('contain.text','1100 Congress Ave')
        cy.get('div').contains('Address 2').parent().should('contain.text','unit B')
        cy.get('div').contains('City').parent().should('contain.text','Austin')
        cy.get('div').contains('State').parent().should('contain.text','TX')
        cy.get('div').contains('Zip Code').parent().should('contain.text','78701')
        cy.get('div').contains('Phone').parent().should('contain.text','512-555-1212')
        cy.get('div').contains('Email').parent().should('contain.text','name@example.com')
        cy.get('div').contains('Dob Month').parent().should('contain.text','1')
        cy.get('div').contains('Dob Day').parent().should('contain.text','2')
        cy.get('div').contains('Dob Year').parent().should('contain.text','2000')
        cy.get('button').click()

        cy.get('h1').contains('Success!').should('contain.text', 'Success!')
        cy.get('p').contains('information').should('contain.text', 'You have successfully verified your information.')
        cy.get('button').click()

    })
})