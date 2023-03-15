import { Component } from "../../core/index.js";

class CartContents extends Component {
  render() {
    const contents = document.createElement("div");
    contents.setAttribute("class", "contents");

    const cartProductList = document.createElement("ul");
    cartProductList.setAttribute("class", "cart-product-list");
    for (let i = 0; i < 3; i++) {
      const cartProductItem = document.createElement("li");
      cartProductItem.setAttribute("class", "cart-product-item");

      const checkboxInp = document.createElement("input");
      checkboxInp.setAttribute("type", "checkbox");

      const itemInfo = document.createElement("div");
      itemInfo.setAttribute("class", "item-info");
      itemInfo.innerHTML = `
      <img src="${"test"}" alt="" />
      <div>
        <p>${"마켓이름"}</p>
        <a>${"상품이름"}</a>
        <span><em>${"상품가격"}</em>원</span>
        <span>택배배송 / 무료배송</span>
      </div>
      `;
      const productStock = document.createElement("div");
      productStock.setAttribute("class", "수량");
      const unitPrice = document.createElement("div");
      unitPrice.setAttribute("class", "unit-price");
      unitPrice.innerHTML = `
      <span><em>${"상품 가격"}</em>원</span>
      <button>주문하기</button>
      `;

      cartProductItem.append(checkboxInp, itemInfo, productStock, unitPrice);
      cartProductList.appendChild(cartProductItem);
    }

    const cartTotalPrice = document.createElement("div");
    cartTotalPrice.setAttribute("class", "cart-total-price");
    const cartTotalPriceInner = document.createElement("div");
    cartTotalPriceInner.setAttribute("class", "cart-total-price__inner");
    const startDiv = document.createElement("div");
    const totalPrice = document.createElement("div");
    totalPrice.innerHTML = `
    <span>총 상품금액</span>
    <span><em>46500</em> 원</span>
    `;
    const minusContainer = document.createElement("span");
    minusContainer.setAttribute("class", "minus");
    minusContainer.innerHTML = `
    <img src="" alt="빼기" />
    <span class="ir">빼기</span>
    `;

    const discountContainer = document.createElement("div");
    discountContainer.innerHTML = `
    <span>상품 할인</span>
    <span><em>0</em> 원</span>
    `;

    const plusContainer = document.createElement("span");
    plusContainer.setAttribute("class", "plus");
    plusContainer.innerHTML = `
    <img src="" alt="" />
    <span class="ir">더하기</span>
    `;

    const shippingContainer = document.createElement("div");
    shippingContainer.innerHTML = `
    <span>배송비</span>
    <span><em>0</em> 원</span>
    `;
    const middleContainer = document.createElement("div");
    const totalPriceContainer = document.createElement("div");
    totalPriceContainer.innerHTML = `
    <span>결제 예정 금액</span>
    <span><em>46500</em> 원</span>`;
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

/**
      <div class="page-wrapper">

        <div class="contents">
          <ul class="cart-product-list">
          </ul>
          <div class="cart-total-price">
            <div class="cart-total-price__inner">
              <div></div>
              <div>
                <span>총 상품금액</span>
                <span><em>46500</em> 원</span>
              </div>
              <span class="minus">
                <img src="./src/assets/minus-icon-bg-white.svg" alt="빼기" />
                <span class="ir">빼기</span>
              </span>
              <div>
                <span>상품 할인</span>
                <span><em>0</em> 원</span>
              </div>
              <span class="plus">
                <img src="./src/assets/plus-icon-bg-white.svg" alt="" />
                <span class="ir">더하기</span>
              </span>
              <div>
                <span>배송비</span>
                <span><em>0</em> 원</span>
              </div>
              <div></div>
              <div>
                <span>결제 예정 금액</span>
                <span><em>46500</em> 원</span>
              </div>
            </div>
          </div>
          <button class="go-pay-btn">주문하기</button>
        </div>
      </div>
 */
