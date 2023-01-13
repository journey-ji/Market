import Component from "../core/Component.js";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.getProductData();
  }

  async getProductData() {
    const response = await fetch(
      `http://test.api.weniv.co.kr/mall/${this.props.id}`
    );
    const data = await response.json();
    this.setState({ product: data });
  }

  render() {
    console.log(this.state);
    const container = document.createElement("div");
    const elemeent = document.createElement("h1");
    elemeent.innerText = `${this.props.id} 상품상세 페이지입니다.`;
    const anchor = document.createElement("a");
    anchor.href = "/";
    anchor.innerText = "상품 목록 페이지 이동";

    container.appendChild(anchor);
    container.appendChild(elemeent);

    return container;
  }
}

export default ProductDetail;
