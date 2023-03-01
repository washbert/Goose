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

  })
})
describe('Delete Honk', () => {
  it('Generated List', () => {

  })
})
