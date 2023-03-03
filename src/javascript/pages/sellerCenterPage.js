import Button from "../components/Button/Button.js";
import TopNavBar from "../components/TopNavBar/topNavBar.js";
import { Component, createComponent } from "../core/index.js";
import "../../style/sellerCenter.css";
class SellerCenterPage extends Component {
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

    // 여기는 각종 버튼들 보여주기
    const sideContainer = document.createElement("div");
    sideContainer.setAttribute("class", "side-container");

    const sellingProductBtn = createComponent(Button, {
      width: "250px",
      height: "50px",
      txt: "판매중인 상품",
      isActive: true,
    });
    sellingProductBtn.style.textAlign = "left";
    sellingProductBtn.style.padding = "15px 20px";
    const shipmentBtn = createComponent(Button, {
      width: "250px",
      height: "50px",
      txt: "주문/배송",
      isActive: false,
    });
    shipmentBtn.style.textAlign = "left";
    shipmentBtn.style.padding = "15px 20px";

    const qnaBtn = createComponent(Button, {
      width: "250px",
      height: "50px",
      txt: "문의/리뷰",
      isActive: false,
    });
    qnaBtn.style.textAlign = "left";
    qnaBtn.style.padding = "15px 20px";
    const statBtn = createComponent(Button, {
      width: "250px",
      height: "50px",
      txt: "통계",
      isActive: false,
    });
    statBtn.style.textAlign = "left";
    statBtn.style.padding = "15px 20px";
    const settingBtn = createComponent(Button, {
      width: "250px",
      height: "50px",
      txt: "스토어설정",
      isActive: false,
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

    const listHead = document.createElement("div");

    contentBody.append(listHead);
    contentContainer.append(sideContainer, contentBody);

    contentsWrapper.append(headLineContainer, contentContainer);
    pageCont.append(topNavBar, contentsWrapper);
    return pageCont;
  }
}
export default SellerCenterPage;
