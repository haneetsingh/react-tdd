describe('Smoke test', () => {
  it('Makes sure the welcome message comes up', () => {
    cy.visit('http://localhost:61314')
      .contains('Hello, world!')
  })
})