describe('Happy path', function () {
    it('Can I fill out a form', function () {
        cy.visit('https://csb-idv4r.netlify.com/')
        cy.contains('Tell us about yourself')

        cy.fixture('happy').then((data) => {
            cy.get('input[name=address1]').type(data['address1']).should('have.value', data['address1'])
            cy.get('input[name=address2]').type(data['address2']).should('have.value', data['address2'])
            cy.get('input[name=city]').type(data['city']).should('have.value', data['city'])
            cy.get('select').select(data['state'])
            cy.get('input[name=zipCode]').type(data['zipCode']).should('have.value', data['zipCode'])

            cy.get('input[name=phone]').type(data['phone']).should('have.value', data['phone'])
            cy.get('input[name=email]').type(data['email']).should('have.value', data['email'])

            cy.get('input[name=dobMonth]').type(data['dobMonth']).should('have.value', data['dobMonth'])
            cy.get('input[name=dobDay]').type(data['dobDay']).should('have.value', data['dobDay'])
            cy.get('input[name=dobYear]').type(data['dobYear']).should('have.value', data['dobYear'])

            cy.get('button[type=submit]').click()

            cy.get('div').contains('Address 1').parent().should('contain.text',data['address1'])
            cy.get('div').contains('Address 2').parent().should('contain.text',data['address2'])
            cy.get('div').contains('City').parent().should('contain.text',data['city'])
            cy.get('div').contains('State').parent().should('contain.text',data['state'])
            cy.get('div').contains('Zip Code').parent().should('contain.text',data['zipCode'])
            cy.get('div').contains('Phone').parent().should('contain.text',data['phone'])
            cy.get('div').contains('Email').parent().should('contain.text',data['email'])
            cy.get('div').contains('Dob Month').parent().should('contain.text',data['dobMonth'])
            cy.get('div').contains('Dob Day').parent().should('contain.text',data['dobDay'])
            cy.get('div').contains('Dob Year').parent().should('contain.text',data['dobYear'])
            cy.get('button').click()
        })

        cy.get('h1').contains('Success!').should('contain.text', 'Success!')
        cy.get('p').contains('information').should('contain.text', 'You have successfully verified your information.')
        cy.get('button').click()

    })
})