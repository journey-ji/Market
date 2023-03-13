import { Component, createComponent } from "../../core/index.js";

import labelImage from "../../../assets/icon-img.png";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";
import { makeProductAPI, uploadImgAPI } from "../../utils/api.js";
class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
      shippingMethod: "PARCEL",
      shippingFee: 0,
      productStock: 0,
    };
  }

  uploadProduct() {
    let productName = document.querySelector("#product_name").value;
    let productPrice = document.querySelector("#product_price").value;
    let shippingFee = document.querySelector("#product_shipping_fee").value;
    let imgFile = document.querySelector("#img_upload_btn")?.files[0];
    let productStock = document.querySelector("#product_stock").value;
    let loginToken = JSON.parse(localStorage.getItem("loginInfo")).loginToken;

    makeProductAPI({
      product_name: productName,
      image: imgFile,
      price: productPrice,
      shipping_method: "PARCEL",
      shipping_fee: shippingFee,
      stock: productStock,
      product_info: "상품 설명입니다.",
      loginToken: loginToken,
    }).then((res) => {
      console.log(res);
    });
  }

  render() {
    const container = document.createElement("form");
    container.setAttribute("class", "content-body");
    container.setAttribute("id", "productForm");

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
      const reader = new FileReader(img_upload_btn);
      reader.onload = ({ target }) => {
        productImage.setAttribute("src", target.result);
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
      id: "product_name",
    });

    const productPrice = createComponent(Input, {
      txt: "판매가",
      class: "product-price-regi",
      id: "product_price",
    });

    const 배송비 = createComponent(Input, {
      txt: "기본배송비",
      class: "product-shipping-fee",
      id: "product_shipping_fee",
    });

    const 재고 = createComponent(Input, {
      txt: "재고",
      class: "product-stock",
      id: "product_stock",
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
    cancelBtn.setAttribute("type", "button");
    cancelBtn.addEventListener("click", () => {
      history.back();
    });

    const submitBtn = createComponent(Button, {
      width: "200px",
      height: "60px",
      txt: "상품등록",
      isUnactive: false,
    });
    submitBtn.setAttribute("type", "button");
    submitBtn.addEventListener("click", () => {
      this.uploadProduct();
    });

    btnCont.append(cancelBtn, submitBtn);

    container.append(mainContent, btnCont);
    return container;
  }
}

export default ProductForm;
