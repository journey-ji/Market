import TopNavBar from "../components/TopNavBar/topNavBar.js";
import { Component, createComponent } from "../core/index.js";
import "../../style/makeProduct.css";
import Input from "../components/Input/Input.js";
import Button from "../components/Button/Button.js";
import ProductForm from "../components/ProductForm/ProductForm.js";
class MakeProduct extends Component {
  render() {
    const pageCont = document.createElement("div");
    const navbar = createComponent(TopNavBar);

    const contentsWrapper = document.createElement("div");
    contentsWrapper.setAttribute("class", "contents-wrapper");
    const headLineContainer = document.createElement("div");
    headLineContainer.setAttribute("class", "head-line-container");
    const contentTag = document.createElement("span");
    contentTag.innerText = "상품등록";

    headLineContainer.append(contentTag);

    const contentBody = createComponent(ProductForm);

    contentsWrapper.append(headLineContainer, contentBody);
    pageCont.append(navbar, contentsWrapper);
    return pageCont;
  }
}

export default MakeProduct;
