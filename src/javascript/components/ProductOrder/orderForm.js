import { Component, createComponent } from "../../core/index.js";
import { OptionSelector, QuantityInput } from "./index.js";
class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  increaseQuantity() {
    const newQuantity = this.state.quantity + 1;
    if (newQuantity > this.props.product.stock) return;
    this.setState({ quantity: newQuantity });
  }
  decreaseQuantity() {
    const newQuantity = this.state.quantity - 1;
    if (newQuantity < 1) return;
    this.setState({ quantity: newQuantity });
  }
  onChangeQuantityInput(e) {
    const maxQuantity = this.props.product.stock;
    const newQuantity = Number(e.target.value);
    if (newQuantity > maxQuantity) {
      this.setState({ quantity: maxQuantity });
    } else if (newQuantity < 1) {
      this.setState({ quantity: 1 });
    } else {
      this.setState({ quantity: newQuantity });
    }
  }
  render() {
    const orderForm = document.createElement("form");
    orderForm.setAttribute("class", "product-order-form");

    const productOptionContainer = document.createElement("div");
    productOptionContainer.setAttribute("class", "product-option");

    const deliveryTitle = document.createElement("span");
    deliveryTitle.setAttribute("class", "delivery-title");
    deliveryTitle.innerText = `택배 배송 / ${
      this.props.product.shipping_fee > 0
        ? this.props.product.shipping_fee.toLocaleString("ko-KR") + "원"
        : "무료 배송"
    }`;

    const selectedProductContainer = document.createElement("div");
    selectedProductContainer.setAttribute("class", "selected-product");

    const quantityInput = createComponent(QuantityInput, {
      ...this.props,
      quantity: this.state.quantity,
      increaseQuantity: this.increaseQuantity.bind(this),
      decreaseQuantity: this.decreaseQuantity.bind(this),
      onChangeQuantityInput: this.onChangeQuantityInput.bind(this),
    });
    selectedProductContainer.append(quantityInput);

    const totalPriceContainer = document.createElement("div");
    totalPriceContainer.setAttribute("class", "total-price");
    const totalPriceTitle = document.createElement("span");
    totalPriceTitle.setAttribute("class", "title");
    totalPriceTitle.innerText = "총 상품금액";

    const totalOrderInfo = document.createElement("div");
    totalOrderInfo.setAttribute("class", "total-order-info");

    const productQuantity = document.createElement("strong");
    productQuantity.setAttribute("class", "quantity");

    const productQuantityNum = document.createElement("span");
    productQuantityNum.innerText = this.state.quantity.toLocaleString("ko-KR");
    productQuantity.append("총 수량", productQuantityNum, "개");

    const totalPrice = document.createElement("strong");
    totalPrice.setAttribute("class", "price l-price");
    totalPrice.innerText = (
      this.props.product.price * this.state.quantity
    ).toLocaleString("ko-KR");

    const priceType = document.createElement("span");
    priceType.innerText = "원";
    totalPrice.append(priceType);

    totalOrderInfo.append(productQuantity, totalPrice);

    totalPriceContainer.append(totalPriceTitle, totalOrderInfo);

    const btnsContainer = document.createElement("div");
    btnsContainer.setAttribute("class", "buy-container");
    const buyBtn = document.createElement("button");
    buyBtn.setAttribute("class", "buy-btn");
    buyBtn.innerText = "바로 구매";
    buyBtn.setAttribute("type", "button");
    const cartAddBtn = document.createElement("button");
    cartAddBtn.setAttribute("class", "cart-btn");
    cartAddBtn.innerText = "장바구니";
    cartAddBtn.setAttribute("type", "button");
    cartAddBtn.addEventListener("click", () => {
      let curItems = JSON.parse(localStorage.getItem("cartItems"));
      if (curItems && curItems?.length > 0) {
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...curItems, this.props.product.product_id])
        );
      } else {
        localStorage.setItem(
          "cartItems",
          JSON.stringify([this.props.product.product_id])
        );
      }
    });

    btnsContainer.append(buyBtn, cartAddBtn);

    productOptionContainer.append(deliveryTitle, selectedProductContainer);
    orderForm.append(
      productOptionContainer,
      totalPriceContainer,
      btnsContainer
    );
    return orderForm;
  }
}

export default OrderForm;
