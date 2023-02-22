import { Component, createComponent } from "../../core/index.js";
import {
  idCheckAPI,
  sellerChkAPI,
  signupAPI,
  signupSellerAPI,
} from "../../utils/api.js";
import Button from "../Button/Button.js";

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idChk: false,
      termChk: false,
      isCustomer: true,
      sellerChk: false,
    };
  }
  render() {
    const joinContainer = document.createElement("form");
    joinContainer.setAttribute("class", "join-form");

    const headLogo = document.createElement("img");
    headLogo.setAttribute("class", "logo");
    const joinWrapper = document.createElement("div");
    joinWrapper.setAttribute("class", "join-wrapper");

    /** 회원가입 타입 */

    const joinTypeWrapper = document.createElement("div");
    joinTypeWrapper.setAttribute("class", "join-type-wrapper");

    const customerJoin = document.createElement("button");
    customerJoin.setAttribute("class", "customer-join");
    customerJoin.type = "button";
    customerJoin.innerText = "구매회원 가입";
    customerJoin.addEventListener("click", () => {
      console.log("customer 버튼 클릭");
      if (!this.state.isCustomer) {
        this.setState({ ...this.state, isCustomer: true });
      }
    });
    const sellerJoin = document.createElement("button");
    sellerJoin.setAttribute("class", "seller-join");
    sellerJoin.type = "button";
    sellerJoin.innerText = "판매회원 가입";
    sellerJoin.addEventListener("click", () => {
      console.log("seller버튼 클릭");
      if (this.state.isCustomer) {
        this.setState({ ...this.state, isCustomer: false });
      }
    });

    if (this.state.isCustomer) {
      customerJoin.classList.add("selected");
      sellerJoin.classList.remove("selected");
    } else {
      sellerJoin.classList.add("selected");
      customerJoin.classList.remove("selected");
    }

    joinTypeWrapper.append(customerJoin, sellerJoin);

    const joinArea = document.createElement("div");
    joinArea.setAttribute("class", "join-area");

    const idWrapper = document.createElement("div");
    idWrapper.setAttribute("class", "id-wrapper");
    const idLabel = document.createElement("label");
    idLabel.innerText = "아이디";

    const idInpWrapper = document.createElement("div");
    idInpWrapper.setAttribute("class", "id-inp-wrapper");
    const idInp = document.createElement("input");
    idInp.id = "id";
    idInp.disabled = this.state.idChk ? true : false;
    const idChkBtn = createComponent(Button, { txt: "중복확인" });
    idChkBtn.setAttribute("type", "button");
    idChkBtn.addEventListener("click", (e) => {
      const idInp = document.querySelector("#id");
      idCheckAPI(idInp.value).then((res) => {
        console.log(res);
        if (res.Success) {
          alert(res.Success);
          idInp.disabled = true;
        } else if (res.FAIL_Message) {
          alert(res.FAIL_Message);
        }
      });
    });

    idInpWrapper.append(idInp, idChkBtn);
    idWrapper.append(idLabel, idInpWrapper);

    const pwWrapper = document.createElement("div");
    pwWrapper.setAttribute("class", "pw-wrapper");
    const pwLabel = document.createElement("label");
    pwLabel.innerText = "비밀번호";
    const pwInp = document.createElement("input");
    pwInp.setAttribute("class", "pw-inp");
    pwInp.id = "pw";
    const pwChkLabel = document.createElement("label");
    pwChkLabel.innerText = "비밀번호 확인";
    const pwChkInp = document.createElement("input");
    pwChkInp.id = "pwChk";
    pwWrapper.append(pwLabel, pwInp, pwChkLabel, pwChkInp);

    const nameWrapper = document.createElement("div");
    nameWrapper.setAttribute("class", "name-wrapper");
    const nameLabel = document.createElement("label");
    nameLabel.innerText = "이름";
    const nameInp = document.createElement("input");
    nameInp.id = "name";
    nameInp.addEventListener("change", () => {});
    nameWrapper.append(nameLabel, nameInp);

    const phoneWrapper = document.createElement("div");
    phoneWrapper.setAttribute("class", "phone-wrapper");

    const phoneLabel = document.createElement("label");
    phoneLabel.innerText = "휴대폰번호";
    const phoneInp = document.createElement("input");
    phoneInp.id = "phone";
    phoneInp.addEventListener("input", (e) => {
      const regex = /^[0-9\b -]{0,13}$/;
      if (!regex.test(e.target.value)) {
        e.target.value = e.target.value.slice(0, -1);
      }
      if (e.target.value.length === 10) {
        e.target.value = e.target.value.replace(
          /(\d{3})(\d{3})(\d{4})/,
          "$1-$2-$3"
        );
      } else if (e.target.value.length === 13) {
        e.target.value = e.target.value
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
      }
    });
    phoneWrapper.append(phoneLabel, phoneInp);

    const emailWrapper = document.createElement("div");
    emailWrapper.setAttribute("class", "email-wrapper");
    const emailLabel = document.createElement("label");
    emailLabel.innerText = "이메일";
    const emailInpWrapper = document.createElement("div");
    emailInpWrapper.setAttribute("class", "email-inp-wrapper");
    const emailIdInp = document.createElement("input");
    emailIdInp.id = "emailId";
    const emailSpan = document.createElement("span");
    emailSpan.innerText = "@";
    const emailHostInp = document.createElement("input");
    emailHostInp.id = "emailHost";

    emailInpWrapper.append(emailIdInp, emailSpan, emailHostInp);

    emailWrapper.append(emailLabel, emailInpWrapper);

    /* 판매자 가입 추가 input */
    const sellerNumberWrapper = document.createElement("div");
    sellerNumberWrapper.setAttribute("class", "regi-wrapper");
    const sellerNumberLabel = document.createElement("label");
    sellerNumberLabel.innerText = "사업자 등록번호";

    const sellerInpWrapper = document.createElement("div");
    sellerInpWrapper.setAttribute("class", "regi-inp-wrapper");
    const sellerInp = document.createElement("input");
    sellerInp.id = "registration";
    sellerInp.disabled = this.state.sellerChk ? true : false;
    const sellerChkBtn = createComponent(Button, { txt: "인증" });
    sellerChkBtn.setAttribute("type", "button");
    sellerChkBtn.addEventListener("click", () => {
      sellerChkAPI(sellerInp.value).then((res) => {
        if (res.Success) {
          document.querySelector("#registration").disabled = true;
          alert(res.Success);
        } else if (res.FAIL_Message) {
          alert(res.FAIL_Message);
        }
      });
    });
    sellerInpWrapper.append(sellerInp, sellerChkBtn);
    sellerNumberWrapper.append(sellerNumberLabel, sellerInpWrapper);

    const storeWrapper = document.createElement("div");
    storeWrapper.setAttribute("class", "store-wrapper");
    const storeLabel = document.createElement("label");
    storeLabel.innerText = "스토어 이름";
    const storeInp = document.createElement("input");
    storeInp.setAttribute("class", "store-inp");
    storeInp.id = "store";
    storeWrapper.append(storeLabel, storeInp);

    joinArea.append(
      idWrapper,
      pwWrapper,
      nameWrapper,
      phoneWrapper,
      emailWrapper
    );
    if (!this.state.isCustomer) {
      joinArea.append(sellerNumberWrapper, storeWrapper);
    }

    const termsWrapper = document.createElement("div");
    termsWrapper.setAttribute("class", "terms-wrapper");
    const chkBox = document.createElement("input");
    chkBox.setAttribute("type", "checkbox");
    chkBox.id = "termChk";
    chkBox.addEventListener("click", (e) => {
      e.target.disabled = true;
    });
    const terms = document.createElement("span");
    terms.innerText =
      "호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.";

    termsWrapper.append(chkBox, terms);

    const joinBtn = document.createElement("button");
    joinBtn.setAttribute("class", "join-btn");
    joinBtn.setAttribute("type", "button");
    joinBtn.innerText = "가입하기";

    joinBtn.addEventListener("click", (e) => {
      let chkList = {
        id: false,
        pw: false,
        term: false,
      };

      e.defaultPrevented;
      const id = document.querySelector("#id").value;
      const pw = document.querySelector("#pw").value;
      const pwChk = document.querySelector("#pwChk").value;
      const name = document.querySelector("#name").value;
      let phone = document.querySelector("#phone").value;
      const emailId = document.querySelector("#emailId").value;
      const emailHost = document.querySelector("#emailHost").value;
      const termChk = document.querySelector("#termChk").value;
      const registration = document.querySelector("#registration").value;
      const store = document.querySelector("#store").value;

      if (pw === pwChk) {
        chkList.pw = true;
      } else {
        chkList.pw = false;
      }
      if (document.querySelector("#id").disabled) {
        chkList.id = true;
      } else {
        chkList.id = false;
      }
      if (document.querySelector("#termChk").disabled) {
        chkList.term = true;
      } else {
        chkList.term = false;
      }
      console.log(chkList.pw);
      console.log(document.querySelector("#id").disabled);
      phone = phone.replaceAll("-", "");
      console.log(
        chkList.id,
        chkList.pw,
        chkList.term,
        phone,
        emailId,
        emailHost,
        termChk
      );
      if (
        (chkList.id,
        chkList.pw,
        chkList.term,
        name && phone && emailId && emailHost && this.state.isCustomer)
      ) {
        signupAPI({
          username: id,
          password: pw,
          password2: pwChk,
          phone_number: phone,
          name: name,
        })
          .then((res) => {
            // 결과확인
            // res.phone_number === phone
            // res.name===name
            /// res.username ===id
            // 위 세개 충족하면 가입 완료
            // 아니면 에러 출력
            // res.password가 존재하면 해당 메시지 출력
            //
            if (
              res.phone_number === phone &&
              res.name === name &&
              res.username === id
            ) {
              alert("회원가입완료");
            } else {
              if (res.password[0]) {
                alert(res.password[0]);
              } else if (res.phone_number[0]) {
                alert(res.phone_number[0]);
              }
            }
          })
          .catch((err) => {
            console.log(err);
            alert("에러 발생");
          });
      } else if (
        (chkList.id,
        chkList.pw,
        chkList.term,
        name &&
          phone &&
          emailId &&
          emailHost &&
          store &&
          !this.state.isCustomer)
      ) {
        signupSellerAPI({
          username: id, // 아이디
          password: pw,
          password2: pwChk,
          phone_number: phone,
          name: name,
          company_registration_number: registration,
          store_name: store,
        })
          .then((res) => {
            if (
              res.phone_number === phone &&
              res.name === name &&
              res.username === id &&
              res.company_registration_number === registration &&
              res.store_name === store
            ) {
              alert("회원가입완료");
            } else {
              if (res.password[0]) {
                alert(res.password[0]);
              } else if (res.phone_number[0]) {
                alert(res.phone_number[0]);
              } else if (res.store_name[0]) {
                alert(res.store_name[0]);
              }
            }
          })
          .catch((err) => {
            alert("에러 발생");
          });
      }
    });

    joinWrapper.append(joinTypeWrapper, joinArea, termsWrapper, joinBtn);
    joinContainer.append(joinWrapper);

    return joinContainer;
  }
}

export default Join;
