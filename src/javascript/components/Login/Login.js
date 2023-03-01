import { Component } from "../../core/index.js";
import { loginAPI } from "../../utils/api.js";
import { store } from "../../utils/store.js";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCustomer: true,
    };
  }
  render() {
    const loginForm = document.createElement("form");
    loginForm.setAttribute("class", "login-form");

    const loginWrapper = document.createElement("div");
    loginWrapper.setAttribute("class", "login-wrapper");
    const loginTypeWrapper = document.createElement("div");
    loginTypeWrapper.setAttribute("class", "login-type-wrapper");
    const customerLogin = document.createElement("button");
    customerLogin.setAttribute("class", "customer-login ");
    customerLogin.innerText = "구매회원 로그인";
    customerLogin.type = "button";
    customerLogin.addEventListener("click", (e) => {
      e.preventDefault;
      if (!this.state.isCustomer) {
        this.setState({ ...this.state, isCustomer: true });
      }
    });

    const sellerLogin = document.createElement("button");
    sellerLogin.setAttribute("class", "seller-login ");
    sellerLogin.innerText = "판매회원 로그인";
    sellerLogin.type = "button";
    sellerLogin.addEventListener("click", (e) => {
      e.preventDefault;
      if (this.state.isCustomer) {
        this.setState({ ...this.state, isCustomer: false });
      }
    });
    if (this.state.isCustomer) {
      customerLogin.classList.add("selected");
    } else {
      sellerLogin.classList.add("selected");
    }

    loginTypeWrapper.append(customerLogin, sellerLogin);

    const loginArea = document.createElement("div");
    loginArea.setAttribute("class", "login-area");
    const idInp = document.createElement("input");
    idInp.setAttribute("class", "id-inp");
    idInp.placeholder = "아이디";
    idInp.id = "id";
    const pwInp = document.createElement("input");
    pwInp.setAttribute("class", "pw-inp");
    pwInp.placeholder = "비밀번호";
    pwInp.id = "pw";
    const loginBtn = document.createElement("button");
    loginBtn.setAttribute("class", "login-btn");
    loginBtn.innerText = "로그인";
    loginBtn.type = "button";
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault;
      let id = document.querySelector("#id");
      let pw = document.querySelector("#pw");

      loginAPI({
        username: id.value,
        password: pw.value,
        login_type: this.state.isCustomer ? "BUYER" : "SELLER",
      }).then((res) => {
        if (res.id) {
          
          localStorage.setItem("loginInfo",JSON.stringify({loginToken:res.token, loginType:this.state.isCustomer ? "BUYER" : "SELLER",}));
          
          alert(`로그인되었습니다.`);
          location.href = "/";
        } else if (res.FAIL_Message) {
          alert("로그인에 실패하였습니다.");
        }
      });
    });

    loginArea.append(idInp, pwInp, loginBtn);
    loginWrapper.append(loginTypeWrapper, loginArea);

    const etcWrapper = document.createElement("div");
    etcWrapper.setAttribute("class", "etc-wrapper");
    const joinAnchor = document.createElement("a");
    joinAnchor.setAttribute("class", "join");
    joinAnchor.innerText = "회원가입";
    const tempSpan = document.createElement("span");
    tempSpan.innerText = "|";
    const pwFindAnchor = document.createElement("a");
    pwFindAnchor.innerText = "비밀번호 찾기";

    etcWrapper.append(joinAnchor, tempSpan, pwFindAnchor);
    loginForm.append(loginWrapper, etcWrapper);
    return loginForm;
  }
}

export default Login;

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
