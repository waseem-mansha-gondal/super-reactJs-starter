/// <reference types="cypress" />

describe("signup Page", () => {
  it("tests signup", () => {
    cy.visit("/signup");
    cy.get("#firstName").type("test");
    cy.get("#lastName").type("user");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("testing@123");
    cy.get("#signup").click();
    cy.wait(3000);
    cy.location("pathname").should("include", "/dashboard");
  });
});
