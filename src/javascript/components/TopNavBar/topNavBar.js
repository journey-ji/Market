import { Component, createComponent } from "../../core/index.js";
import logo from "../../../assets/Logo-hodu.png";
import Button from "../Button/Button.js";
import "./topNavBar.css";
import selImg from "../../../assets/icon-shopping-bag.svg";
import userImg from "../../../assets/icon-user.svg";
import cartImg from "../../../assets/icon-shopping-cart.svg";
import Modal from "./modal.js";

class TopNavBar extends Component {
  render() {
    let isLogin = localStorage.getItem("loginToken");
    console.log("로그인");
    console.log(!!isLogin);
    const $navCont = document.createElement("nav");
    $navCont.classList.add("top-navbar");

    const $navWrapper = document.createElement("div");
    $navWrapper.classList.add("nav-wrapper");

    const leftCont = document.createElement("div");
    leftCont.setAttribute("class", "left-cont");

    const headerLogo = document.createElement("img");
    headerLogo.setAttribute("src", logo);
    headerLogo.setAttribute("alt", "헤더로고");
    headerLogo.setAttribute("class", "logo-img");

    const inpCont = document.createElement("div");
    inpCont.setAttribute("class", "inp-cont");
    const searchInp = document.createElement("input");
    searchInp.setAttribute("class", "search-inp");
    searchInp.placeholder = "상품을 검색해보세요!";
    const searchBtn = document.createElement("button");
    searchBtn.setAttribute("class", "search-btn");
    inpCont.append(searchInp, searchBtn);
    leftCont.append(headerLogo, inpCont);

    const rightCont = document.createElement("div");
    rightCont.setAttribute("class", "right-cont");

    // 오른쪽 버튼
    if (this.props.isSeller) {
      const btnCont = document.createElement("button");
      btnCont.setAttribute("class", "btn-cont");
      const userBtn = document.createElement("img");
      userBtn.setAttribute("class", "user-btn");
      userBtn.setAttribute("src", userImg);
      const btnTxt = document.createElement("span");
      btnTxt.innerText = "마이페이지";
      btnTxt.setAttribute("class", "btn-txt");
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

      const btnCont2 = document.createElement("button");
      btnCont2.setAttribute("class", "btn-cont");
      btnCont2.addEventListener("click", (e) => {
        e.preventDefault();

        if (!isLogin) {
          location.href = "/login";
        } else {
          const modal = document.querySelector("#myPageModal");
          if (modal.classList.contains("ir")) {
            modal.classList.remove("ir");
            document.body.style.overflow = "hidden";
          } else {
            modal.classList.add("ir");
            document.body.style.overflow = "";
          }
        }
      });

      const userBtn = document.createElement("img");
      userBtn.setAttribute("class", "user-btn");
      userBtn.setAttribute("src", userImg);
      const btnTxt2 = document.createElement("span");
      if (isLogin) {
        btnTxt2.innerText = "마이페이지";
      } else {
        btnTxt2.innerText = "로그인";
      }

      btnTxt2.setAttribute("class", "btn-txt");
      btnCont2.append(userBtn, btnTxt2);

      rightCont.append(btnCont, btnCont2);
    }

    const modal = createComponent(Modal, { isLogin: isLogin });

    $navWrapper.append(leftCont, rightCont);
    $navCont.append(modal, $navWrapper);
    return $navCont;
  }
}

export default TopNavBar;
