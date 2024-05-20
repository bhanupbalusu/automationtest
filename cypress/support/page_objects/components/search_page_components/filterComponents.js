class FilterComponents {
  filterByArticle() {
    cy.contains("span", "Article").should("be.visible").click();
  }

  // Assertion functions
  assertArticleIsSelected() {
    cy.get("li.coveo-facet-breadcrumb-value-list-item")
      .should("have.length", 1)
      .find(".coveo-facet-breadcrumb-caption")
      .should("have.text", "Article");
  }
}

export default FilterComponents;
