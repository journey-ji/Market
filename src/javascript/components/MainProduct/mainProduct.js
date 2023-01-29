import { Component, createComponent } from "../../core/index.js";
import ProductName from "../Product/productName.js";
import ProductPrice from "../Product/productPrice.js";
import getProductsAPI from "./api.js";

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
    ulContainer.setAttribute("class", "main-product-list");

    const setProducts = () => {
      getProductsAPI().then((data) => {
        console.log(data.results);
        for (let i = 0; i < data.results.length; i++) {
          const productContainer = document.createElement("li");
          productContainer.setAttribute("class", "content-item");

          const productAnchor = document.createElement("a");
          productAnchor.setAttribute(
            "href",
            `/products/${data.results[i].product_id}`
          );

          const $img = document.createElement("img");
          $img.setAttribute("src", data.results[i].image);

          const $seller = document.createElement("p");
          $seller.innerText = data.results[i].store_name;

          const $itemHeaderIr = createComponent(ProductName, {
            name: data.results[i].product_name,
          });

          const $price = createComponent(ProductPrice, {
            price: data.results[i].price,
          });

          productAnchor.append($img, $seller, $itemHeaderIr, $price);
          productContainer.append(productAnchor);
          ulContainer.append(productContainer);
        }
      });
    };
    setProducts();
    for (let i = 0; i < 15; i++) {}
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
