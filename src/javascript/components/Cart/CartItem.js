import { Component, createComponent } from "../../core/index.js";
import { QuantityInput } from "../ProductOrder/index.js";
import "./CartItem.css";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.stock ? 1 : 0,
    };
  }
  increaseQuantity() {
    const newQuantity = this.state.quantity + 1;
    if (newQuantity > this.props.stock) return false;
    this.setState({ quantity: newQuantity });
    return true;
  }
  decreaseQuantity() {
    const newQuantity = this.state.quantity - 1;
    if (newQuantity < 1) return false;
    this.setState({ quantity: newQuantity });
    return true;
  }
  onChangeQuantityInput(e) {
    const maxQuantity = this.props.stock;
    const newQuantity = Number(e.target.value);
    if (newQuantity > maxQuantity) {
      this.setState({ quantity: maxQuantity });
      return maxQuantity;
    } else if (newQuantity < 1) {
      this.setState({ quantity: 1 });
      return 1;
    } else {
      this.setState({ quantity: newQuantity });
      return newQuantity;
    }
  }
  render() {
    const cartProductItem = document.createElement("li");
    cartProductItem.setAttribute("class", "cart-product-item");

    const checkboxInp = document.createElement("input");
    checkboxInp.setAttribute("type", "checkbox");

    const itemInfo = document.createElement("div");
    itemInfo.setAttribute("class", "item-info");
    itemInfo.innerHTML = `
    <img src=${this.props.image} alt="" />
    <div>
      <p>${this.props.store_name}</p>
      <a>${this.props.product_name}</a>
      <span><em>${this.props.price}</em>원</span>
      <span>택배배송 / ${
        this.props.shipping_fee > 0 ? this.props.shipping_fee : "무료배송"
      }</span>
    </div>
    `;
    const productStock = document.createElement("div");
    productStock.setAttribute("class", "수량");
    const quantityInput = createComponent(QuantityInput, {
      product: this.props,
      quantity: this.state.quantity,
      increaseQuantity: this.increaseQuantity.bind(this),
      decreaseQuantity: this.decreaseQuantity.bind(this),
      onChangeQuantityInput: this.onChangeQuantityInput.bind(this),
      productCntEvent: this.props.productCntEvent,
    });
    productStock.append(quantityInput);
    const unitPrice = document.createElement("div");
    unitPrice.setAttribute("class", "unit-price");
    unitPrice.innerHTML = `
    <span><em id='price-${this.props.product_id}'>${
      this.props.price * this.state.quantity
    }</em>원</span>
    <button>주문하기</button>
    `;

    cartProductItem.append(checkboxInp, itemInfo, productStock, unitPrice);
    if (!this.props.stock) {
      // 품절메뉴 처리
      const wrapper = document.createElement("div");
      wrapper.setAttribute("class", "sold-out");
      wrapper.append(cartProductItem);
      return wrapper;
    } else {
      return cartProductItem;
    }
  }
}

export default CartItem;
