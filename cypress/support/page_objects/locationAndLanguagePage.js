class LocationAndLanguagePage {
  selectMainLocation(loc) {
    cy.get("span.col-12.col-md-9.text-left")
      .contains(loc)
      .should("be.visible")
      .scrollIntoView()
      .click();
  }

  selectCountryAndLanguage(country, language) {
    cy.get("td.heading-6.align-text-top")
      .contains(country)
      .should("be.visible")
      .parent("tr")
      .find("a.country-selector__languages")
      .contains(language)
      .click();
  }

  // Assertion functions
}

export default LocationAndLanguagePage;
