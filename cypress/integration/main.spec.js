/// <reference types="cypress" />

describe('main test', function() {
    it('main page loads', function() {
      cy.visit('/')
      cy.get('.App-header').should('be.visible')
      cy.get('.App-link').should('contain.text', 'Learn React')
    })
  })