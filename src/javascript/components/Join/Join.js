import { Component, createComponent } from "../../core";
import Input from "../Input/Input";
import PasswordChk from "./PasswordChk";

class Join extends Component {
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
      type: "id",
      class: "id-inp",
    });

    const pwDiv = createComponent(PasswordChk);
    const nameInputWrapper = createComponent(Input, {
      txt: "이름",
      type: "basic",
      class: "id-inp",
    });

    const phoneInputWrapper = createComponent(Input, {
      txt: "휴대폰 번호",
      type: "phone",
    });
    const emailInputWrapper = createComponent(Input, {
      txt: "이메일",
      type: "email",
      class: "email-inp",
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

    joinWrapper.append(joinTypeWrapper, joinArea, termsWrapper, joinBtn);
    joinContainer.append(joinWrapper);

    return joinContainer;
  }
}

export default Join;
