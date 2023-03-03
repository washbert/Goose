describe('Getting List of Honks', () => {
  it('Generated List', () => {
    cy.visit('localhost:8080/home')
    cy.get('.media-content')
  })
})
describe('Click button to delete honk', () => {
  it('Delete Honk', () => {
    cy.visit('localhost:8080/home')
    cy.get('#Delete_Honk1').click()
    cy.get('#Delete_Honk1').should('not.exist')
  })
})
describe('Edit Honk', () => {
  it('Generated List', () => {
    cy.visit('localhost:8080/home')
    cy.get('#Edit_Honk_Input1').type('This is a test')
    cy.get('#Edit_Honk1').click()
    cy.get('#Honk1').contains('This is a test')

  })
})
