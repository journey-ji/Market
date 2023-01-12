import { ProductCard } from "../components/ProductCard/index.js";

class ProductPage {
  constructor() {
    this.mainElement = document.createElement("main");
    this.product = {};
  }

  async getProductData() {
    const response = await fetch("http://test.api.weniv.co.kr/mall");
    const data = await response.json();
    this.product = await data;
  }

  async setProductList() {
    await this.getProductData();
    console.log(this.product);

    this.mainElement.classList.add("product");
    const productPageHeader = document.createElement("h1");
    productPageHeader.setAttribute("class", "ir");
    productPageHeader.innerText = "상품목록 페이지";
    this.mainElement.appendChild(productPageHeader);

    const productList = document.createElement("ul");
    productList.setAttribute("class", "product-item");

    this.mainElement.innerHTML = `
        <h1 class="ir">상품목록 페이지</h1>
        <ul class="product-list"></ul>
    `;

    this.product.forEach(async (item) => {
      const productitem = document.createElement("li");
      productitem.setAttribute("class", "product-item");
      const productCard = new ProductCard(item);
      productitem.appendChild(productCard.render());
      productList.append(productCard.render());
    });

    this.mainElement.append(productList);
    console.log(this.mainElement);
  }
  render() {
    this.setProductList();
    return this.mainElement;
  }
}

export default ProductPage;
