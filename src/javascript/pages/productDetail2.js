import { ProductBasicInfo } from "../components/ProductDetail/index.js";
import TopNavBar from "../components/TopNavBar/topNavBar.js";
import { Component, createComponent } from "../core/index.js";

class ProductDetail2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      isLoaded: false,
    };
    this.getProductData();
  }
  async getProductData() {
    const response = await fetch(
      `https://openmarket.weniv.co.kr/products/${this.props.id}`,
      { method: "GET" }
    );
    const data = await response.json();
    this.setState({ product: data, isLoaded: true });
  }

  render() {
    const pageContainer = document.createElement("div");
    pageContainer.setAttribute("class", "page-wrapper");

    const topNavBar = createComponent(TopNavBar);
    const orderWrapper = document.createElement("div");
    orderWrapper.setAttribute("class", "order-wrapper");

    if (this.state.isLoaded) {
      console.log(this.state.product);
      const productBasicInfo = createComponent(ProductBasicInfo, {
        product: this.state.product,
      });

      pageContainer.append(productBasicInfo);
    }

    pageContainer.append(topNavBar, orderWrapper);
    return pageContainer;
  }
}

export default ProductDetail2;

/**
 *     <main>
      <div class="page-wrapper">
        <div class="order-wrapper">
          <img src="" alt="상품이미지" class="product-img" />
          <div class="info-wrapper">
            <!-- 여기에 productDetail페이지 적용하기 -->
            <span>백엔드 글로벌</span>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <p>17500<span>원</span></p>
          </div>
        </div>
        <nav class="product-nav"></nav>
        <div class="detail-wrapper"></div>
      </div>
    </main>
 */
