class ResultComponents {
  // Assertion functions
  assertLinkDisplay() {
    cy.get("div.coveo-result-list-container .coveo-list-layout").each(($el) => {
      cy.wrap($el)
        .find("a.CoveoResultLink")
        .should("have.attr", "href")
        .then((href) => {
          expect(href.toLowerCase()).to.match(
            /^https:\/\/www\.wtwco\.com\/en-us\//
          );
        });
    });
  }
}

export default ResultComponents;
