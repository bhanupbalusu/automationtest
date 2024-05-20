import HomePage from "./homePage";
import SearchPage from "./searchPage";
import LocationAndLanguagePage from "./locationAndLanguagePage";
import FilterComponents from "./components//search_page_components/filterComponents";
import ResultComponents from "./components//search_page_components/resultComponents";

class PageFactory {
  static createPage(pageName) {
    switch (pageName) {
      case "HomePage":
        return new HomePage();
      case "SearchPage":
        return new SearchPage();
      case "LocationAndLanguagePage":
        return new LocationAndLanguagePage();
      default:
        throw new Error(`Page ${pageName} not found`);
    }
  }

  static createComponents(componentsName) {
    switch (componentsName) {
      case "FilterComponents":
        return new FilterComponents();
      case "ResultComponents":
        return new ResultComponents();
      default:
        throw new Error(`Component ${componentsName} not found`);
    }
  }
}

export default PageFactory;
