describe("Login functionality", () => {
  beforeEach(() => {
    cy.eyesOpen({
        "appName": "SauceTest"
    });
    cy.visit("https://www.saucedemo.com/");
    cy.eyesCheckWindow();
  });
  it("should login successfully with a valid credentials", () => {
    cy.get("[data-test=username]").type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.url().should("include", "inventory.html");
    cy.eyesCheckWindow();

    
  });
  afterEach(() => {
    cy.eyesClose();
  })
});
