import { Component } from "../../core/index.js";

class MainProduct extends Component {
  getDataAPI() {}
  render() {
    console.log("메인페이지 상품");
    const contentWrap = document.createElement("div");
    contentWrap.setAttribute("class", "content-wrap");

    const contentHeaderIr = document.createElement("h2");
    contentHeaderIr.setAttribute("class", "ir");
    contentHeaderIr.innerText = "상품 목록";
    contentHeaderIr.setAttribute("class", "ir");
    const ulContainer = document.createElement("ul");

    const productContainer = document.createElement("li");
    productContainer.setAttribute("class", "content-item");

    const $img = document.createElement("img");

    const $seller = document.createElement("p");
    $seller.innerText = "판매처";

    const $itemHeaderIr = document.createElement("h3");
    $itemHeaderIr.innerText = "상품이름";

    const $price = document.createElement("span");
    $price.innerText = "가격";

    ulContainer.append(productContainer, $img, $seller, $itemHeaderIr, $price);
    contentWrap.append(contentHeaderIr, ulContainer);
    return contentWrap;
  }
}

export default MainProduct;

/**
 * <div class="content-wrap">
          <h2 class="ir">상품 목록</h2>
          <ul>
            <li class="content-item">
              <img src="" alt="" />
              <p>판매처</p>
              <h3>상품이름</h3>
              <span>가격</span>
            </li>
            <li class="content-item"></li>
            <li class="content-item"></li>
            <li class="content-item"></li>
            <li class="content-item"></li>
          </ul>
        </div>
 */
