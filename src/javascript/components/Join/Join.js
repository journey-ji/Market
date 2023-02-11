import { Component, createComponent } from "../../core";
import Input from "../Input/Input";
import EmailChk from "./EmailChk";
import PasswordChk from "./PasswordChk";
import PhoneChk from "./PhoneChk";

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      idChk: false,
      pw: "",
      pw2: "",
      pwChk: "",
      name: "",
      phone: ["", "", ""],
      emailId: "",
      emailHost: "",
    };
  }
  render() {
    const joinContainer = document.createElement("article");
    joinContainer.setAttribute("class", "join-form");
    const headLogo = document.createElement("img");
    headLogo.setAttribute("class", "logo");
    const joinWrapper = document.createElement("div");
    joinWrapper.setAttribute("class", "join-wrapper");

    const joinTypeWrapper = document.createElement("div");
    joinTypeWrapper.setAttribute("class", "join-type-wrapper");

    const customerJoin = document.createElement("span");
    customerJoin.setAttribute("class", "customer-join");
    customerJoin.innerText = "구매회원 가입";
    const sellerJoin = document.createElement("span");
    sellerJoin.setAttribute("class", "seller-join");
    sellerJoin.innerText = "판매회원 가입";

    joinTypeWrapper.append(customerJoin, sellerJoin);

    const joinArea = document.createElement("div");
    joinArea.setAttribute("class", "join-area");

    const idInputWrapper = createComponent(Input, {
      txt: "아이디",
      value: this.state.id,
      type: "id",
      class: "id-inp",
      info: this.state,
      setInfo: this.setState.bind(this),
    });

    const pwDiv = createComponent(PasswordChk, {
      info: this.state,
      setInfo: this.setState.bind(this),
    });

    const nameInputWrapper = createComponent(Input, {
      txt: "이름",
      type: "name",
      class: "id-inp",
      info: this.state,
      value: this.state.name,
      setInfo: this.setState.bind(this),
    });

    const phoneInputWrapper = createComponent(PhoneChk, {
      info: this.state,
      setInfo: this.setState.bind(this),
    });
    const emailInputWrapper = createComponent(EmailChk, {
      info: this.state,
      setInfo: this.setState.bind(this),
    });

    joinArea.append(
      idInputWrapper,
      pwDiv,
      nameInputWrapper,
      phoneInputWrapper,
      emailInputWrapper
    );

    const termsWrapper = document.createElement("div");
    termsWrapper.setAttribute("class", "terms-wrapper");
    const chkBox = document.createElement("input");
    chkBox.setAttribute("type", "checkbox");
    const terms = document.createElement("span");
    terms.innerText =
      "호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.";

    termsWrapper.append(chkBox, terms);

    const joinBtn = document.createElement("button");
    joinBtn.setAttribute("class", "join-btn");
    joinBtn.setAttribute("type", "button");
    joinBtn.innerText = "가입하기";
    joinBtn.addEventListener("click", (e) => {
      e.defaultPrevented;
      console.log(this.state);
    });

    joinWrapper.append(joinTypeWrapper, joinArea, termsWrapper, joinBtn);
    joinContainer.append(joinWrapper);

    return joinContainer;
  }
}

export default Join;
