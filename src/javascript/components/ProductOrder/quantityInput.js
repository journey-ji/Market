import { Component } from "../../core/index.js";
import "./quantityInput.css";
import minus_img from "../../../assets/icon-minus-line.svg";
import plus_img from "../../../assets/icon-plus-line.svg";
class QuantityInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const quantityOption = document.createElement("div");
    quantityOption.setAttribute("class", "quantity-option");

    const quantityIncreaseButton = document.createElement("button");
    quantityIncreaseButton.type = "button";
    quantityIncreaseButton.setAttribute("class", "quantity-plus");
    quantityIncreaseButton.addEventListener("click", () => {
      if (this.props.increaseQuantity()) {
        this.props.productCntEvent(parseInt(this.props.product.price));
      }
    });
    const increaseButtonIr = document.createElement("span");
    increaseButtonIr.setAttribute("class", "ir");
    increaseButtonIr.innerText = "수량 추가";
    const plusImg = document.createElement("img");
    plusImg.setAttribute("src", plus_img);
    plusImg.setAttribute("class", "plus-img");

    quantityIncreaseButton.append(increaseButtonIr, plusImg);

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.setAttribute("class", "quantity-input");
    quantityInput.setAttribute("id", `quantityInput`);
    quantityInput.value = this.props.quantity;
    quantityInput.addEventListener("change", (e) => {
      let preQuan = this.props.quantity;
      let cnt = this.props.onChangeQuantityInput(e);
      this.props.productCntEvent(
        (cnt - preQuan) * parseInt(this.props.product.price)
      );
      console.log(typeof preQuan, typeof cnt);
    });

    const quantityLabel = document.createElement("label");
    quantityLabel.setAttribute("class", "ir");
    quantityLabel.setAttribute("for", `quantityLabel`);
    quantityLabel.innerText = "수량";

    const quantityDecreaseButton = document.createElement("button");
    quantityDecreaseButton.type = "button";
    quantityDecreaseButton.setAttribute("class", "quantity-minus");
    quantityDecreaseButton.addEventListener("click", () => {
      if (this.props.decreaseQuantity()) {
        this.props.productCntEvent(-parseInt(this.props.product.price));
      }
    });

    const decreaseButtonIr = document.createElement("span");
    decreaseButtonIr.setAttribute("class", "ir");
    decreaseButtonIr.innerText = "수량 감소";
    const minusImg = document.createElement("img");
    minusImg.setAttribute("src", minus_img);
    minusImg.setAttribute("class", "minus-img");

    quantityDecreaseButton.append(decreaseButtonIr, minusImg);

    quantityOption.append(
      quantityDecreaseButton,
      quantityInput,
      quantityIncreaseButton,
      quantityLabel
    );

    return quantityOption;
  }
}

export default QuantityInput;
