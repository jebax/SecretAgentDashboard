describe('Opening the dashboard', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('shows the title on screen', () => {
    cy.get('#dashboardTitle')
      .contains('Secret Agent Dashboard')
  })
})
