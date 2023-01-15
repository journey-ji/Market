import { Component, createComponent } from "../core/index.js";
import {
  ProductBasicInfo,
  ProductDetailInfo,
} from "../components/ProductDetail/index.js";

class ProductDetail extends Component {
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
      `http://test.api.weniv.co.kr/mall/${this.props.id}`
    );
    const data = await response.json();
    this.setState({ product: data, isLoaded: true });
  }

  render() {
    const container = document.createElement("article");
    container.setAttribute("class", "product-detail");

    const heading = document.createElement("h1");
    heading.setAttribute("class", "ir");
    heading.innerText = "상품 상세 정보 페이지";

    const contentWrap = document.createElement("div");
    contentWrap.setAttribute("class", "content-wrap");

    if (this.state.isLoaded) {
      const productBasicInfo = createComponent(ProductBasicInfo, {
        product: this.state.product,
      });

      const productDetailInfo = createComponent(ProductDetailInfo, {
        product: this.state.product,
      });

      contentWrap.append(productBasicInfo, productDetailInfo);
    }

    container.append(contentWrap);
    return container;
  }
}

export default ProductDetail;
