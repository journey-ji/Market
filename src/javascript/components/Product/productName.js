import Component from "../../core/Component.js";

class ProductName extends Component {
  render() {
    const productName = document.createElement("strong");
    productName.setAttribute("class", "product-name sl-ellipsis");
    productName.innerText = this.props.name;
    return productName;
  }
}

export default ProductName;
