import { Component, createComponent } from "../../core/index.js";
import min_img from "../../../assets/icon-minus-line.svg";
import plus_img from "../../../assets/icon-plus-line.svg";
import "./CartContents.css";
import { getProductAPI, getProductsAPI } from "../../utils/api.js";
import QuantityInput from "../ProductOrder/quantityInput.js";
import CartItem from "./CartItem.js";
class CartContents extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: !!JSON.parse(localStorage.getItem("loginInfo")),
    };
  }

  addTotalPrice(price) {
    let container = document.querySelector("#total-price");
    let totalPayment = document.querySelector("#payment-fee");
    if (price) {
      container.innerText = parseInt(container.innerText) + parseInt(price);
      totalPayment.innerText =
        parseInt(totalPayment.innerText) + parseInt(price);
    }

    console.log(container.innerText);
  }
  render() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let priceSum = 0;
    cartItems.sort((a, b) => a - b);
    const contents = document.createElement("div");
    contents.setAttribute("class", "contents");

    const cartProductList = document.createElement("ul");
    cartProductList.setAttribute("class", "cart-product-list");
    for (let i = 0; i < cartItems.length; i++) {
      getProductAPI(cartItems[i])
        .then((res) => {
          const cartProductItem = createComponent(CartItem, {
            ...res,
            productCntEvent: this.addTotalPrice,
          });
          cartProductList.appendChild(cartProductItem);
          return res;
        })
        .then((res) => {
          let totalPriceEm = document.querySelector("#total-price");
          let totalShippingFeeEm = document.querySelector(
            "#total-shipping-fee"
          );
          let paymentFeeEm = document.querySelector("#payment-fee");
          if (res.stock) {
            totalPriceEm.innerText =
              parseInt(totalPriceEm.innerText) + parseInt(res.price);
            totalShippingFeeEm.innerText =
              parseInt(totalShippingFeeEm.innerText) +
              parseInt(res.shipping_fee);
            paymentFeeEm.innerText =
              parseInt(totalPriceEm.innerText) +
              parseInt(totalShippingFeeEm.innerText);
          }
        });
    }

    const cartTotalPrice = document.createElement("div");
    cartTotalPrice.setAttribute("class", "cart-total-price");
    const cartTotalPriceInner = document.createElement("div");
    cartTotalPriceInner.setAttribute("class", "cart-total-price__inner");
    const startDiv = document.createElement("div");
    const totalPrice = document.createElement("div");
    totalPrice.innerHTML = `
    <span>총 상품금액</span>
    <span><em id='total-price'>0</em> 원</span>
    `;
    const minusContainer = document.createElement("span");
    minusContainer.setAttribute("class", "minus");
    const minusImg = document.createElement("img");
    minusImg.setAttribute("src", min_img);
    const minusIr = document.createElement("span");
    minusIr.setAttribute("class", "ir");
    minusIr.innerText = "더하기";
    minusContainer.append(minusImg, minusIr);

    const discountContainer = document.createElement("div");
    discountContainer.innerHTML = `
    <span>상품 할인</span>
    <span><em>0</em> 원</span>
    `;

    const plusContainer = document.createElement("span");
    plusContainer.setAttribute("class", "plus");
    const plusImg = document.createElement("img");
    plusImg.setAttribute("src", plus_img);
    const plusIr = document.createElement("span");
    plusIr.setAttribute("class", "ir");
    plusIr.innerText = "더하기";
    plusContainer.append(plusImg, plusIr);

    const shippingContainer = document.createElement("div");
    shippingContainer.innerHTML = `
    <span>배송비</span>
    <span><em id='total-shipping-fee'>0</em> 원</span>
    `;
    const middleContainer = document.createElement("div");
    const totalPriceContainer = document.createElement("div");
    totalPriceContainer.innerHTML = `
    <span>결제 예정 금액</span>
    <span><em id='payment-fee'>46500</em> 원</span>`;
    cartTotalPriceInner.append(
      startDiv,
      totalPrice,
      minusContainer,
      discountContainer,
      plusContainer,
      shippingContainer,
      middleContainer,
      totalPriceContainer
    );
    cartTotalPrice.append(cartTotalPriceInner);
    const goPayBtn = document.createElement("button");
    goPayBtn.setAttribute("class", "go-pay-btn");
    goPayBtn.innerText = "주문하기";

    contents.append(cartProductList, cartTotalPrice);
    return contents;
  }
}

export default CartContents;

/*



엘베 - 여자 - 귀가 - 못탐

남편 -집-죽음 - 거동 불편할 수도
- 어떻게 알았을까

*/
