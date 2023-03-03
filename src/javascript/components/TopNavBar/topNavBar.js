import { Component, createComponent } from "../../core/index.js";
import logo from "../../../assets/Logo-hodu.png";
import Button from "../Button/Button.js";
import "./topNavBar.css";
import selImg from "../../../assets/icon-shopping-bag.svg";
import userImg from "../../../assets/icon-user.svg";
import cartImg from "../../../assets/icon-shopping-cart.svg";
import Modal from "./modal.js";
import Logo from "../Logo/Logo.js";

/**
 * isSeller인것을 알려야하는데 ,,
 *
 */

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: !!JSON.parse(localStorage.getItem("loginInfo")) ? true : false,
      loginType: JSON.parse(localStorage.getItem("loginInfo"))?.loginType || "",
    };
  }
  logout() {
    localStorage.removeItem("loginInfo");
    alert("로그아웃되었습니다.");
    location.href = "/";
  }
  render() {
    const $navCont = document.createElement("nav");
    $navCont.classList.add("top-navbar");

    const $navWrapper = document.createElement("div");
    $navWrapper.classList.add("nav-wrapper");

    const leftCont = document.createElement("div");
    leftCont.setAttribute("class", "left-cont");

    const LogoContainer = document.createElement("a");
    LogoContainer.href = "/";

    const testLogo = createComponent(Logo, {
      width: "124px",
      height: "38px",
      margin: "26px 30px 26px 0px",
    });

    const headerLogo = document.createElement("img");
    headerLogo.setAttribute("src", logo);
    headerLogo.setAttribute("alt", "헤더로고");
    headerLogo.setAttribute("class", "logo-img");

    LogoContainer.append(testLogo);

    const inpCont = document.createElement("div");
    inpCont.setAttribute("class", "inp-cont");
    const searchInp = document.createElement("input");
    searchInp.setAttribute("class", "search-inp");
    searchInp.placeholder = "상품을 검색해보세요!";
    const searchBtn = document.createElement("button");
    searchBtn.setAttribute("class", "search-btn");
    inpCont.append(searchInp, searchBtn);
    leftCont.append(LogoContainer, inpCont);

    const rightCont = document.createElement("div");
    rightCont.setAttribute("class", "right-cont");

    // 오른쪽 버튼
    if (this.state.loginType === "SELLER") {
      const btnCont = document.createElement("button");
      btnCont.setAttribute("class", "btn-cont");
      const userBtn = document.createElement("img");
      userBtn.setAttribute("class", "user-btn");
      userBtn.setAttribute("src", userImg);
      const btnTxt = document.createElement("span");
      btnTxt.innerText = "로그아웃";
      btnTxt.setAttribute("class", "btn-txt");
      btnCont.addEventListener("click", this.logout);
      btnCont.append(userBtn, btnTxt);

      const sellerCenter = createComponent(Button, {
        width: "168px",
        height: "54px",
      });
      sellerCenter.setAttribute("class", "seller-center-btn");
      const sellerImg = document.createElement("img");
      sellerImg.setAttribute("class", "seller-img");
      sellerImg.setAttribute("src", selImg);

      const sellerTxt = document.createElement("span");
      sellerTxt.setAttribute("class", "seller-txt");
      sellerTxt.innerText = "판매자센터";

      // 이미지랑, span 붙여넣기
      sellerCenter.addEventListener("click", () => {
        location.href = "/seller";
      });
      sellerCenter.append(sellerImg, sellerTxt);
      rightCont.append(btnCont, sellerCenter);
    } else {
      const btnCont = document.createElement("button");
      btnCont.setAttribute("class", "btn-cont");
      btnCont.addEventListener("click", () => {
        location.href = "/cart";
      });
      const cartBtn = document.createElement("img");
      cartBtn.setAttribute("class", "cart-btn");
      cartBtn.setAttribute("src", cartImg);
      const btnTxt = document.createElement("span");
      btnTxt.innerText = "장바구니";
      btnTxt.setAttribute("class", "btn-txt");

      btnCont.append(cartBtn, btnTxt);

      const btnCont2 = document.createElement("a");
      btnCont2.setAttribute("class", "btn-cont");

      if (this.state.isLogin) {
        btnCont2.setAttribute("href", "/");
      } else {
        btnCont2.setAttribute("href", "/login");
      }

      const userBtn = document.createElement("img");
      userBtn.setAttribute("class", "user-btn");
      userBtn.setAttribute("src", userImg);
      const btnTxt2 = document.createElement("span");
      if (this.state.isLogin) {
        btnTxt2.innerText = "로그아웃";
        btnCont2.addEventListener("click", this.logout);
      } else {
        btnTxt2.innerText = "로그인";
      }

      btnTxt2.setAttribute("class", "btn-txt");

      btnCont2.append(userBtn, btnTxt2);

      rightCont.append(btnCont, btnCont2);
    }

    // const modal = createComponent(Modal, { isLogin: this.state.isLogin });

    $navWrapper.append(leftCont, rightCont);
    $navCont.append($navWrapper);
    return $navCont;
  }
}

export default TopNavBar;
