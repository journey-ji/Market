import { ProductCard } from "../components/ProductCard/index.js";
import Component from "../core/Component.js";

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
    this.getProductData();
  }

  async getProductData() {
    const response = await fetch("http://test.api.weniv.co.kr/mall");
    const data = await response.json();
    this.setState({ product: data });
  }

  render() {
    this.mainElement = document.createElement("main");

    this.mainElement.classList.add("product");
    const productPageHeader = document.createElement("h1");
    productPageHeader.setAttribute("class", "ir");
    productPageHeader.innerText = "상품목록 페이지";
    this.mainElement.appendChild(productPageHeader);

    const productList = document.createElement("ul");
    productList.setAttribute("class", "product-list");

    this.state.product.forEach(async (item) => {
      console.log(item.stockCount);
      const productitem = document.createElement("li");

      productitem.setAttribute("class", "product-item");
      if (item.stockCount < 1) {
        console.log(item.productName);
        productitem.classList.add("sold-out");
      }

      const productCard = new ProductCard({ item: item });
      productitem.appendChild(productCard.render());
      productList.appendChild(productitem);
    });

    this.mainElement.append(productList);
    return this.mainElement;
  }
}

export default ProductPage;
