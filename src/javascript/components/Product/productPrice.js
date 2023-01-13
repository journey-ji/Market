import Component from "../../core/Component.js";

class ProductPrice extends Component {
  render() {
    const productPriceContainer = document.createElement("div");
    productPriceContainer.setAttribute("class", "product-price");

    const productPrice = document.createElement("strong");
    productPrice.setAttribute("class", "price m-price");

    const priceType = document.createElement("span");
    priceType.innerText = "원";

    productPriceContainer.appendChild(productPrice);

    if (this.props.discountRate > 0) {
      const discountRateContainer = document.createElement("div");
      discountRateContainer.setAttribute("class", "price-discount");

      const originPrice = document.createElement("strong");
      originPrice.setAttribute("class", "price-strikethrough");
      originPrice.innerText =
        this.props.price.toLocaleString("ko-KR") + priceType.innerText;

      const discountRateDisplay = document.createElement("strong");
      discountRateDisplay.setAttribute("class", "discount-rate");
      discountRateDisplay.innerText = this.props.discountRate + "%";

      this.props.price =
        (this.props.price * (100 - this.props.discountRate)) / 100;

      discountRateContainer.appendChild(originPrice);
      discountRateContainer.appendChild(discountRateDisplay);
      productPriceContainer.appendChild(discountRateContainer);
    }

    productPrice.innerText = this.props.price.toLocaleString("ko-KR");
    productPrice.appendChild(priceType);
    return productPriceContainer;
  }
}
export default ProductPrice;
