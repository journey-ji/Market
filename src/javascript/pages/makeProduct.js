import TopNavBar from "../components/TopNavBar/topNavBar.js";
import { Component, createComponent } from "../core/index.js";
import "../../style/makeProduct.css";
import Input from "../components/Input/Input.js";
import Button from "../components/Button/Button.js";
import labelImage from "../../assets/icon-img.png";
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

    const productImage = document.createElement("img");
    productImage.setAttribute("class", "product-img");

    const ImgUploadCont = document.createElement("div");
    ImgUploadCont.setAttribute("class", "img-upload-container");
    const ImgUploadLabel = document.createElement("label");
    ImgUploadLabel.setAttribute("for", "img_upload_btn");
    const labelImg = document.createElement("img");
    labelImg.setAttribute("src", labelImage);

    ImgUploadLabel.append(labelImg);
    const ImgUploadBtn = document.createElement("input");
    ImgUploadBtn.setAttribute("id", "img_upload_btn");
    ImgUploadBtn.setAttribute("class", "ir");
    ImgUploadBtn.setAttribute("type", "file");
    ImgUploadBtn.setAttribute("accept", "image/*");
    ImgUploadBtn.addEventListener("change", () => {
      const reader = new FileReader();
      reader.onload = ({ target }) => {
        productImage.setAttribute("src", target.result);
        console.log(target.result);
      };
      reader.readAsDataURL(ImgUploadBtn.files[0]);
    });

    ImgUploadCont.append(ImgUploadLabel, ImgUploadBtn);
    productImgCont.append(productImgSpan, productImage, ImgUploadCont);
    const productInfoCont = document.createElement("div");
    productInfoCont.setAttribute("class", "product-info-cont");

    const productName = createComponent(Input, {
      txt: "상품명",
      class: "product-name-regi",
    });

    const productPrice = createComponent(Input, {
      txt: "판매가",
      class: "product-price-regi",
    });

    const 배송비 = createComponent(Input, {
      txt: "기본배송비",
      class: "product-shipping-fee",
    });

    const 재고 = createComponent(Input, {
      txt: "재고",
      class: "product-stock",
    });

    productInfoCont.append(productName, productPrice, 배송비, 재고);
    mainContent.append(productImgCont, productInfoCont);

    const btnCont = document.createElement("div");
    btnCont.setAttribute("class", "btn-container");

    const cancelBtn = createComponent(Button, {
      width: "200px",
      height: "60px",
      txt: "취소",
      isUnactive: true,
      class: "cancel-btn",
    });
    cancelBtn.addEventListener("click", () => {
      history.back();
    });

    const submitBtn = createComponent(Button, {
      width: "200px",
      height: "60px",
      txt: "상품등록",
      isUnactive: false,
    });

    btnCont.append(cancelBtn, submitBtn);

    contentBody.append(mainContent, btnCont);
    contentsWrapper.append(headLineContainer, contentBody);
    pageCont.append(navbar, contentsWrapper);
    return pageCont;
  }
}

export default MakeProduct;
