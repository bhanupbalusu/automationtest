import PageFactory from "../../support/page_objects/pageFactory";

describe("WTW UI Automation Tests", () => {
  let homePage, searchPage, locationAndLanguagePage;
  let filterComponents, resultcomponents;
  let jsonData;

  before(() => {
    homePage = PageFactory.createPage("HomePage");
    searchPage = PageFactory.createPage("SearchPage");
    locationAndLanguagePage = PageFactory.createPage("LocationAndLanguagePage");
    filterComponents = PageFactory.createComponents("FilterComponents");
    resultcomponents = PageFactory.createComponents("ResultComponents");
  });

  beforeEach(() => {
    cy.fixture("data").then((data) => {
      jsonData = data;
    });
    // arrange
    homePage.visit();
  });

  it("Location and Laguage test", () => {
    // act
    homePage.getLocationAndLanguage().then((text) => {
      if (
        !text.includes(jsonData.countryCode) &&
        !text.includes(jsonData.languageCode)
      ) {
        homePage.clickLocationAndLanguage();
        locationAndLanguagePage.selectMainLocation(jsonData.mainLocation);
        locationAndLanguagePage.selectCountryAndLanguage(
          jsonData.country,
          jsonData.language
        );
      }
    });
    // assert
    homePage.assertLocationAndLanguage(
      jsonData.countryCode,
      jsonData.languageCode
    );
  });

  it("Check and Sort by Date test", () => {
    // arrange
    homePage.search(jsonData.searchQuery);
    // act
    searchPage.checkSort();
    // assert
    searchPage.assertListSortedByDate();
  });

  it("Filter by Article test", () => {
    // arrange
    searchPage.visitSearch(jsonData.searchQuery);
    searchPage.checkSort();
    // act
    filterComponents.filterByArticle();
    // assert
    filterComponents.assertArticleIsSelected();
  });

  it("Link displayed in each article in the list test ", () => {
    // arrange
    searchPage.visitSearch(jsonData.searchQuery);
    // act
    searchPage.checkSort();
    filterComponents.filterByArticle();
    // assert
    resultcomponents.assertLinkDisplay();
  });
});
