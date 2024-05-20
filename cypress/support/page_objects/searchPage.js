class SearchPage {
  visitSearch(query) {
    cy.visit("/search#q=" + query);
  }

  checkSort() {
    cy.get('span[aria-label="Sort results by Relevancy"]')
      .should("be.visible")
      .then(($relevancy) => {
        if ($relevancy.attr("aria-checked") === "true") {
          cy.get('span[aria-label="Sort by Date in descending order"]').click();
        }
      });
  }

  // Assertion functions
  assertListSortedByDate() {
    cy.url().should("include", "date");
    cy.url().should("include", "descending");
  }
}

export default SearchPage;
