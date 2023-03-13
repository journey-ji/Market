import { Component, createComponent } from "../../core/index.js";
import { loadSellerProductsAPI } from "../../utils/api.js";
import ListItem from "./ListItem.js";
import "./SellerProductList.css";
class SellerProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: "",
    };
    this.loadData();
  }
  loadData() {
    let loginToken = JSON.parse(localStorage.getItem("loginInfo")).loginToken;
    loadSellerProductsAPI(loginToken).then((res) => {
      this.setState({ products: res });
    });
  }
  render() {
    const container = document.createElement("div");
    const listHeader = document.createElement("div");
    listHeader.setAttribute("class", "list-header");

    const infoSpan = document.createElement("span");
    infoSpan.innerText = "상품정보";
    infoSpan.setAttribute("class", "info-span");
    const priceSpan = document.createElement("span");
    priceSpan.innerText = "가격";
    priceSpan.setAttribute("class", "price-span");
    const updateSpan = document.createElement("span");
    updateSpan.innerText = "수정";
    updateSpan.setAttribute("class", "update-span");
    const deleteSpan = document.createElement("span");
    deleteSpan.innerText = "삭제";
    deleteSpan.setAttribute("class", "delete-span");
    listHeader.append(infoSpan, priceSpan, updateSpan, deleteSpan);

    const listContainer = document.createElement("ul");

    if (this.state.products) {
      this.state.products.results.forEach((element) => {
        let item = createComponent(ListItem, element);
        listContainer.append(item);
      });
    }
    container.append(listHeader, listContainer);
    return container;
  }
}

export default SellerProductList;
