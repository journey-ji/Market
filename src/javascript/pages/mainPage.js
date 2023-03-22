import MainCarousel from "../components/MainCarousel/mainCarousel.js";
import MainProduct from "../components/mainProduct/mainProduct.js";
import TopNavBar from "../components/TopNavBar/topNavBar.js";
import { Component, createComponent } from "../core/index.js";

class MainPage extends Component {
  constructor(props) {
    super();
    this.state = {
      searchData: [],
    };
  }
  render() {
    const pageContainer = document.createElement("div");

    const topNavBar = createComponent(TopNavBar, {
      isSeller: false,
      test: this.state.searchData,
      setSearchData: this.setState.bind(this),
    });
    // const mainCarousel = createComponent(MainCarousel);
    const mainProducts = createComponent(MainProduct, {
      searchData: this.state.searchData,
    });
    pageContainer.append(topNavBar, mainProducts);
    return pageContainer;
  }
}

export default MainPage;
