class ProductDetail {
  constructor(id) {
    this.id = id;
    this.product = {};
  }

  async getProductData() {
    const response = await fetch(`http://test.api.weniv.co.kr/mall/${this.id}`);
    const data = await response.json();
    this.product = await data;
  }

  async setProductList() {
    await this.getProductData();
    console.log(this.product);
  }
  render() {
    const container = document.createElement("div");
    const elemeent = document.createElement("h1");
    elemeent.innerText = `${this.id} 상품상세 페이지입니다.`;
    const anchor = document.createElement("a");
    anchor.href = "/";
    anchor.innerText = "상품 목록 페이지 이동";

    container.appendChild(anchor);
    container.appendChild(elemeent);

    this.setProductList();
    return container;
  }
}

export default ProductDetail;
