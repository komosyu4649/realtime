/// <reference types="cypress" />
describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Shall navigate to Dashboard when successfully login', () => {
    cy.get("input[placeholder='Email'").type('komosyu4649@gmail.com')
    cy.get("input[placeholder='Password'").type('komori841')
    cy.get("[type='submit']").click()
    cy.get("[data-testid='logout'").should('be.visible')
  })
  it('Shall navigate to Auth when logout clicked', () => {
    cy.get("input[placeholder='Email'").type('komosyu4649@gmail.com')
    cy.get("input[placeholder='Password'").type('komori841')
    cy.get("[type='submit']").click()
    cy.get("[data-testid='logout'").should('be.visible')
    cy.get("[data-testid='logout'").click()
    cy.get("input[placeholder='Email'").should('be.visible')
    cy.get("input[placeholder='Password'").should('be.visible')
  })
  it('Shall not navigate to Dashboard with wrong credentials', () => {
    cy.get("input[placeholder='Email'").type('komosyu4649@gmail.com')
    cy.get("input[placeholder='Password'").type('komori123')
    cy.get("[type='submit']").click()
    cy.get("[data-testid='logout']").should('not.exist')
  })
  //   it('Shall navigate to Dashboard when successfully registered', () => {
  //     cy.get("input[placeholder='Email'").type('register-test@mail.com')
  //     cy.get("input[placeholder='Password'").type('register123')
  //     cy.contains('change mode ?').click()
  //     cy.get("[type='submit']").should('have.text', 'Register')
  //     cy.get("[type='submit']").click()
  //     cy.get("input[placeholder='username']").should(
  //       'have.value',
  //       'register-test@mail.com'
  //     )
  //   })
})
export {}
