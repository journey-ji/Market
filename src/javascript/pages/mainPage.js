import MainCarousel from "../components/MainCarousel/mainCarousel.js";
import MainProduct from "../components/mainProduct/mainProduct.js";
import TopNavBar from "../components/TopNavBar/topNavBar.js";
import { Component, createComponent } from "../core/index.js";

class MainPage extends Component {
  render() {
    const pageContainer = document.createElement("div");

    const topNavBar = createComponent(TopNavBar);
    const mainCarousel = createComponent(MainCarousel);
    const mainProducts = createComponent(MainProduct);
    pageContainer.append(topNavBar, mainCarousel, mainProducts);
    return pageContainer;
  }
}

export default MainPage;
