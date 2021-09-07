describe('Testing task system',() => {

    beforeEach(() => {
        cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html')
    })

    const valid_data = {
        firstName: "Joao",
        lastName: "Lucas",
        email: "joaolucas@gmail.com",
        ticketQty: "2",
        signature: "Joao Lucas"
    }

    it('should present the correct app title', () => {
        cy.get('header h1').contains('TICKETBOX')
    });

    it('should order a ticket sucessfully', () => {
        cy.fillForm(valid_data)
        cy.get("#publication").check()
        cy.get("button[type=submit]").click()
        cy.get(".success").should("have.text", "Ticket(s) successfully ordered.")
    });

    it('should validate email correcly', () => {
        cy.get("#email").type("joaolucasx.gmail.com")
        cy.get("#email").should("have.class", "required touched invalid")
    });

    it('should present correct purchase agreement', () => {
        cy.fillForm(valid_data)
        cy.get(".agreement p").should("have.text", "I, Joao Lucas, wish to buy 2 General Admission tickets. I understand that all ticket sales are final.")
    });

    it('should enable confirm tickets button only after fill all required fields', () => {
        cy.fillForm(valid_data)
        cy.get("button[type=submit]").as("submit").should("be.enabled")
        cy.get("#first-name").clear()
        cy.get("@submit").should("be.disabled")
    });

});