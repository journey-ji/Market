import { Component } from "../../core/index.js";
import "./mainCarousel.css";
class MainCarousel extends Component {
  render() {
    const carouselContainer = document.createElement("article");
    carouselContainer.setAttribute("class", "carousel-cont");
    carouselContainer.innerText = "";
    return carouselContainer;
  }
}

export default MainCarousel;
