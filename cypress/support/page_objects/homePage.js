class HomePage {
  visit() {
    cy.visit("/");
    cy.url().should("include", "https://www.wtwco.com/en-us");
    cy.get("#onetrust-accept-btn-handler").should("be.visible").click();
  }

  getLocationAndLanguage() {
    cy.get('[data-selabel="Location Selector"]')
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log("Text between the tags: " + text);
      });

    return cy
      .get('[data-selabel="Location Selector"]')
      .should("be.visible")
      .invoke("text");
  }

  clickLocationAndLanguage() {
    cy.get('nav[aria-label="Location Selector"] button.site-nav__utility-btn')
      .should("be.visible")
      .click();
  }

  search(query) {
    cy.contains("span", "Search").should("be.visible").click();
    cy.get('input[aria-label="Search box"]', { force: true })
      .should("be.visible")
      .type(query);
    cy.get('a[class="CoveoSearchButton coveo-accessible-button"]')
      .should("be.visible")
      .click();
  }

  // Assertion functions
  assertLocationAndLanguage(expectedCountryCode, expectedLanguageCode) {
    this.getLocationAndLanguage().then((text) => {
      expect(text).to.include(expectedCountryCode);
      expect(text).to.include(expectedLanguageCode);
    });
  }
}

export default HomePage;
