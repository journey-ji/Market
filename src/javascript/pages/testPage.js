import MainCarousel from "../components/MainCarousel/mainCarousel.js";
import MainProduct from "../components/mainProduct/mainProduct.js";
import TopNavBar from "../components/topNavBar.js";
import { Component, createComponent } from "../core/index.js";

class TestPage extends Component {
  render() {
    const testContainer = document.createElement("div");
    testContainer.innerText = "테스트 페이지 입니다.";

    const topNavBar = createComponent(TopNavBar);
    const mainCarousel = createComponent(MainCarousel);
    const mainProducts = createComponent(MainProduct);
    testContainer.append(topNavBar, mainCarousel, mainProducts);
    return testContainer;
  }
}

export default TestPage;
