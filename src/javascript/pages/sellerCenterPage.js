import Button from "../components/Button/Button.js";
import TopNavBar from "../components/TopNavBar/topNavBar.js";
import { Component, createComponent } from "../core/index.js";
import "../../style/sellerCenter.css";
class SellerCenterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: null,
    };
  }
  render() {
    const pageCont = document.createElement("div");

    const topNavBar = createComponent(TopNavBar, { isSeller: false });
    topNavBar.setAttribute("class", "top-navbar");
    const contentsWrapper = document.createElement("div");
    contentsWrapper.setAttribute("class", "contents-wrapper");
    const headLineContainer = document.createElement("div");
    headLineContainer.setAttribute("class", "head-line-container");
    const tagContainer = document.createElement("div");
    tagContainer.setAttribute("class", "tag-container");
    const contentTag = document.createElement("span");
    contentTag.innerText = "대시보드";
    const corpTag = document.createElement("span");
    corpTag.innerText = "백엔드글로벌";
    tagContainer.append(contentTag, corpTag);

    const productBtn = createComponent(Button, {
      width: "168px",
      height: "54px",
      txt: "상품업로드",
    });

    headLineContainer.append(tagContainer, productBtn);

    const contentContainer = document.createElement("div");
    contentContainer.setAttribute("class", "content-container");

    // 여기는 각종 버튼들 보여주기
    const sideContainer = document.createElement("div");
    sideContainer.setAttribute("class", "side-container");

    const sellingProductBtn = document.createElement("button");
    sellingProductBtn.type = "button";
    sellingProductBtn.setAttribute("class", "side-btn clicked");
    sellingProductBtn.innerText = "판매중인 상품";

    const shipmentBtn = document.createElement("button");
    shipmentBtn.type = "button";
    shipmentBtn.setAttribute("class", "side-btn");
    shipmentBtn.innerText = "주문 / 배송";

    const qnaBtn = document.createElement("button");
    qnaBtn.type = "button";
    qnaBtn.setAttribute("class", "side-btn");
    qnaBtn.innerText = "문의 / 리뷰";

    const statBtn = document.createElement("button");
    statBtn.type = "button";
    statBtn.setAttribute("class", "side-btn");
    statBtn.innerText = "통계";

    const settingBtn = document.createElement("button");
    settingBtn.type = "button";
    settingBtn.setAttribute("class", "side-btn");
    settingBtn.innerText = "스토어설정";

    const btnList = [
      sellingProductBtn,
      shipmentBtn,
      qnaBtn,
      statBtn,
      settingBtn,
    ];
    btnList.forEach((sideBtn) => {
      sideBtn.addEventListener("click", (e) => {
        e.target.classList.add("clicked");
        btnList
          .filter((item) => item !== e.target)
          .forEach((btn) => {
            btn.classList.remove("clicked");
          });
      });
    });
    settingBtn.style.textAlign = "left";
    settingBtn.style.padding = "15px 20px";
    sideContainer.append(
      sellingProductBtn,
      shipmentBtn,
      qnaBtn,
      statBtn,
      settingBtn
    );

    // 여기는 버튼에 따른 콘텐츠 보여주기
    const contentBody = document.createElement("div");
    contentBody.setAttribute("class", "content-body");

    const listHead = document.createElement("div");
    listHead.innerText = "판매중인 상품이 들어갈 영역";

    contentBody.append(listHead);
    contentContainer.append(sideContainer, contentBody);

    contentsWrapper.append(headLineContainer, contentContainer);
    pageCont.append(topNavBar, contentsWrapper);
    return pageCont;
  }
}
export default SellerCenterPage;
