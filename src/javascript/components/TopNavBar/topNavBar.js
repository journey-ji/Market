import { Component, createComponent } from "../../core/index.js";
import logo from "../../../assets/Logo-hodu.png";
import Button from "../Button/Button.js";
import "./topNavBar.css";
import selImg from "../../../assets/icon-shopping-bag.svg";
import userImg from "../../../assets/icon-user.svg";
import cartImg from "../../../assets/icon-shopping-cart.svg";
import Modal from "./modal.js";
import Logo from "../Logo/Logo.js";
import searchImage from "../../../assets/search-btn.svg";
import { searchProductsAPI } from "../../utils/api.js";
import { debounceTime } from "rxjs";

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
    //this.props.setSearchData
  }
  logout() {
    localStorage.removeItem("loginInfo");
    alert("로그아웃되었습니다.");
    location.href = "/";
  }
  render() {
    console.log(this.state);
    const $navCont = document.createElement("nav");
    $navCont.classList.add("top-navbar");

    const $navWrapper = document.createElement("div");
    $navWrapper.classList.add("nav-wrapper");

    const leftCont = document.createElement("div");
    leftCont.setAttribute("class", "left-cont");

    const LogoContainer = document.createElement("a");
    LogoContainer.href = "/";

    // const testLogo = createComponent(Logo, {
    //   width: "124px",
    //   height: "38px",
    //   margin: "26px 30px 26px 0px",
    // });

    const testLogo = createComponent(Logo, {
      width: "124px",
      height: "90px",
      margin: "0px",
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
    searchBtn.setAttribute('id','navbar-search-btn')
    const searchImg = document.createElement("img");
    searchImg.setAttribute("src", searchImage);
    searchImg.setAttribute('alt',`탐색버튼 이미지입니다.`)
    searchBtn.append(searchImg);

    searchBtn.addEventListener("click", () => {
      if (searchInp.value !== "") {
        searchProductsAPI(searchInp.value).then((res) => {
          this.props.setSearchData({ searchData: res });
        });
      }
    });
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
      userBtn.setAttribute('alt','로그인,로그아웃 버튼 이미지')
      const btnTxt = document.createElement("span");
      btnTxt.innerText = "로그아웃";
      btnTxt.setAttribute("class", "btn-txt");
      btnCont.addEventListener("click", this.logout);
      btnCont.append(userBtn, btnTxt);

      const btnContainer = document.createElement("a");
      btnContainer.setAttribute("href", "/seller");
      const sellerCenter = createComponent(Button, {
        width: "168px",
        height: "54px",
      });
      sellerCenter.setAttribute("class", "seller-center-btn");
      const sellerImg = document.createElement("img");
      sellerImg.setAttribute("class", "seller-img");
      sellerImg.setAttribute("src", selImg);
      sellerImg.setAttribute('alt','판매자센터 버튼 이미지')

      const sellerTxt = document.createElement("span");
      sellerTxt.setAttribute("class", "seller-txt");
      sellerTxt.innerText = "판매자센터";

      sellerCenter.append(sellerImg, sellerTxt);
      btnContainer.append(sellerCenter);
      rightCont.append(btnCont, btnContainer);
    } else {
      const btnCont = document.createElement("a");
      btnCont.setAttribute("href", "/cart");
      btnCont.setAttribute("class", "btn-cont");

      const cartBtn = document.createElement("img");
      cartBtn.setAttribute("class", "cart-btn");
      cartBtn.setAttribute("src", cartImg);
      cartBtn.setAttribute("alt", '장바구니 버튼 이미지');
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
        userBtn.setAttribute("alt", '로그아웃 버튼 이미지');
        btnCont2.addEventListener("click", this.logout);

      } else {
        userBtn.setAttribute("alt", '로그인 버튼 이미지');
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
