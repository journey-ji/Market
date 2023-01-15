import { Component } from "../../core/index.js";

class MainProduct extends Component {
  getDataAPI() {}
  render() {
    console.log("메인페이지 상품");
    const productsContainer = document.createElement("div");

    return productsContainer;
  }
}

export default MainProduct;
