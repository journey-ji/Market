import { Component } from "../../core/index.js";
import "./mainCarousel.css";
class MainCarousel extends Component {
  render() {
    const carouselContainer = document.createElement("article");
    carouselContainer.setAttribute("class", "carousel-cont");
    carouselContainer.innerText = "";

    const leftArrow = document.createElement("span");
    leftArrow.setAttribute("class", "left-arrow");
    const leftTxt = document.createElement("div");
    leftTxt.innerText = "<";
    leftTxt.setAttribute("class", "arrow-text");
    leftArrow.append(leftTxt);

    const rightArrow = document.createElement("span");
    rightArrow.setAttribute("class", "right-arrow");
    const rightTxt = document.createElement("div");
    rightTxt.innerText = ">";
    rightTxt.setAttribute("class", "arrow-text");
    rightArrow.append(rightTxt);

    carouselContainer.append(leftArrow, rightArrow);
    return carouselContainer;
  }
}

export default MainCarousel;
