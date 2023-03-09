import TopNavBar from "../components/TopNavBar/topNavBar.js";
import { Component, createComponent } from "../core/index.js";
import "../../style/makeProduct.css";
import Input from "../components/Input/Input.js";
class MakeProduct extends Component {
  render() {
    const pageCont = document.createElement("div");
    const navbar = createComponent(TopNavBar);

    const contentsWrapper = document.createElement("div");
    contentsWrapper.setAttribute("class", "contents-wrapper");
    const headLineContainer = document.createElement("div");
    headLineContainer.setAttribute("class", "head-line-container");
    const contentTag = document.createElement("span");
    contentTag.innerText = "상품등록";
    headLineContainer.append(contentTag);

    const contentBody = document.createElement("div");
    contentBody.setAttribute("class", "content-body");

    const mainContent = document.createElement("div");
    mainContent.setAttribute("class", "main-content");
    const productImgCont = document.createElement("div");
    productImgCont.setAttribute("class", "product-img-cont");
    const productImgSpan = document.createElement("span");
    productImgSpan.setAttribute("class", "product-img-span");
    productImgSpan.innerText = "상품 이미지";
    const productImg = document.createElement("img");
    productImg.setAttribute("class", "product-img");

    productImgCont.append(productImgSpan, productImg);
    const productInfoCont = document.createElement("div");
    productInfoCont.setAttribute("class", "product-info-cont");

    const productName = createComponent(Input, {
      txt: "상품명",
      class: "product-name",
    });

    const productPrice = createComponent(Input, {
      txt: "판매가",
      class: "product-price",
    });

    productInfoCont.append(productName, productPrice);
    mainContent.append(productImgCont, productInfoCont);

    contentBody.append(mainContent);
    contentsWrapper.append(headLineContainer, contentBody);
    pageCont.append(navbar, contentsWrapper);
    return pageCont;
  }
}

export default MakeProduct;
