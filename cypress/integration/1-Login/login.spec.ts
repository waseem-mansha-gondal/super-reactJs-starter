/// <reference types="cypress" />

describe("Login Page", () => {
  it("tests login", () => {
    cy.visit("/login");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("testing@123");
    cy.get("#login").click();
    cy.wait(3000);
    cy.location("pathname").should("include", "/dashboard");
  });
});
