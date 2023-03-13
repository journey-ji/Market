import { Component, createComponent } from "../../core/index.js";
import { deleteProductAPI } from "../../utils/api.js";
import Button from "../Button/Button.js";
import "./ListItem.css";
class ListItem extends Component {
  render() {
    console.log(this.props);
    const item = document.createElement("li");
    item.setAttribute("class", "item");
    const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", this.props.image);
    productImg.setAttribute("class", "product-img");
    const productTxt = document.createElement("div");
    productTxt.setAttribute("class", "product-txt");
    const productName = document.createElement("span");
    productName.innerText = this.props.product_name;
    productName.setAttribute("class", "item-product-name");
    const productStock = document.createElement("span");
    productStock.innerText = `재고 : ${this.props.stock}`;
    productStock.setAttribute("class", "item-product-stock");
    productTxt.append(productName, productStock);
    productInfo.append(productImg, productTxt);

    const productPrice = document.createElement("span");
    productPrice.setAttribute("class", "product-price");
    productPrice.innerText = `${this.props.price.toLocaleString("ko-KR")}원`;
    const productUpdate = document.createElement("div");
    productUpdate.setAttribute("class", "product-update");
    const updateBtn = createComponent(Button, {
      width: "80px",
      height: "40px",
      txt: "수정",
    });
    productUpdate.append(updateBtn);

    const productDelete = document.createElement("div");
    const deleteBtn = createComponent(Button, {
      width: "80px",
      height: "40px",
      txt: "삭제",
      isUnactive: true,
      class: "delete-btn",
    });
    deleteBtn.addEventListener("click", () => {
      let loginToken = JSON.parse(localStorage.getItem("loginInfo")).loginToken;
      deleteProductAPI({
        loginToken: loginToken,
        product_id: this.props.product_id,
      }).then((res) => {
        console.log(res);
      });
    });
    productDelete.setAttribute("class", "product-delete");
    productDelete.append(deleteBtn);
    item.append(productInfo, productPrice, productUpdate, productDelete);
    return item;
  }
}

export default ListItem;
