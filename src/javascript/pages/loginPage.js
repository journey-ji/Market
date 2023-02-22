import Login from "../components/Login/Login.js";
import { Component, createComponent } from "../core/index.js";
import "../../style/login.css";

class LoginPage extends Component {
  render() {
    const pageContainer = document.createElement("div");
    pageContainer.setAttribute("class", "page-cont");
    const loginForm = createComponent(Login);

    pageContainer.append(loginForm);
    return pageContainer;
  }
}

export default LoginPage;

/**
 *       <h1 class="ir header">호두</h1>
      <article class="login-article">
        <img src="./src/assets/Logo-hodu.png" alt="메인 로고" class="logo" />
        <div class="login-wrapper">
          <div class="login-type-wrapper">
            <span class="customer-login selected">구매회원 로그인</span>
            <span class="seller-login">판매회원 로그인</span>
          </div>
          <div class="login-area">
            <input type="text" placeholder="아이디" class="id-inp" />
            <input type="text" placeholder="비밀번호" class="pw-inp" />
            <button type="button" class="login-btn">로그인</button>
          </div>
        </div>
        <div class="etc-wrapper">
          <a href="" class="join">회원가입</a>
          <span>|</span>
          <a href="">비밀번호 찾기</a>
        </div>
      </article>
 */
