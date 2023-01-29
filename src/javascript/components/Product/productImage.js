import Component from "../../core/Component.js";

class ProductImage extends Component {
  render() {
    const productImageContainer = document.createElement("div");
    productImageContainer.setAttribute("class", "product-img");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", `${this.props.src}`);
    productImage.setAttribute("alt", "상품이미지");
    productImageContainer.appendChild(productImage);
    return productImageContainer;
  }
}

export default ProductImage;
