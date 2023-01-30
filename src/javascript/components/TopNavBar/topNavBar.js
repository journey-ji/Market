import { Component } from "../../core/index.js";

class TopNavBar extends Component {
  render() {
    const $navCont = document.createElement("nav");
    $navCont.classList.add("top-navbar");

    const $navWrapper = document.createElement("div");
    $navWrapper.classList.add("nav-wrapper");

    const leftCont = document.createElement("div");
    leftCont.setAttribute("class", "left-cont");

    const headerLogo = document.createElement("img");
    headerLogo.setAttribute(
      "src",
      `${window.location.origin}/src/assets/Logo-hodu.png`
    );
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

    // 오른쪽 버튼

    const rightCont = document.createElement("div");
    rightCont.setAttribute("class", "right-cont");

    const btnCont = document.createElement("div");
    btnCont.setAttribute("class", "btn-cont");
    const cartBtn = document.createElement("button");
    cartBtn.setAttribute("class", "cart-btn");
    const btnTxt = document.createElement("span");
    btnTxt.innerText = "장바구니";
    btnTxt.setAttribute("class", "btn-txt");
    btnCont.append(cartBtn, btnTxt);

    const btnCont2 = document.createElement("div");
    btnCont2.setAttribute("class", "btn-cont");
    const userBtn = document.createElement("button");
    userBtn.setAttribute("class", "user-btn");
    const btnTxt2 = document.createElement("span");
    btnTxt2.innerText = "마이페이지";
    btnTxt2.setAttribute("class", "btn-txt");
    btnCont2.append(userBtn, btnTxt2);

    rightCont.append(btnCont, btnCont2);

    $navWrapper.append(leftCont, rightCont);
    $navCont.append($navWrapper);
    return $navCont;
  }
}

export default TopNavBar;
