import { Component } from "../../core/index.js";

class MainCarousel extends Component {
  render() {
    const carouselContainer = document.createElement("article");
    carouselContainer.setAttribute("class", "carousel-cont");
    carouselContainer.innerText = "";
    return carouselContainer;
  }
}

export default MainCarousel;
