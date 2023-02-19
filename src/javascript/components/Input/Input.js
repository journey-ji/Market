import { Component } from "../../core/index.js";
import { idCheckAPI } from "../../utils/api.js";
import "./Input.css";

/**
 * 기본타입 : 위에 텍스트 아래 인풋박스
 * 아이디 타입 : 위에 텍스트, 아래 인풋박스와 중복확인버튼
 * 비밀번호타입 : 기본타입 + 재확인과의 일치확인 표시
 * 휴대폰 타입 : 하나의 select박스와 두개의 인풋박스
 * 이메일 타입 : 두개의 인풋박스 + 사이에 @ span
 *
 */

class Input extends Component {
  onClickChkId() {
    idCheckAPI(this.props.value).then((data) => {
      console.log(data);
      if (data?.Success) {
        this.props.setInfo({ ...this.props.info, idChk: true });
      }
    });
  }
  onChangeIdInput() {
    // const target = document.querySelector(".id-inp");
    this.props.setInfo({ ...this.props.info, id: event.target.value });
  }

  onChangeEmailIdInput() {
    const target = document.querySelector(".emailId-input");
    this.props.setInfo({ ...this.props.info, emailId: target.value });
  }
  onChangeEmailHostInput() {
    const target = document.querySelector(".emailHost-input");
    this.props.setInfo({ ...this.props.info, emailHost: target.value });
  }
  onChangeNameInp() {
    this.props.setInfo({ ...this.props.info, name: event.target.value });
  }

  onChangePhoneInp() {
    if (event.target.id === "first") {
      this.props.setInfo({
        ...this.props.info,
        phone: {
          ...this.props.info.phone,
          first: event.target.value,
        },
      });
    } else if (event.target.id === "second") {
      this.props.setInfo({
        ...this.props.info,
        phone: {
          ...this.props.info.phone,
          second: event.target.value,
        },
      });
    } else if (event.target.id === "third") {
      this.props.setInfo({
        ...this.props.info,
        phone: {
          ...this.props.info.phone,
          third: event.target.value,
        },
      });
    }
  }

  async onChangePwInp() {
    if (event.target.id === "pw") {
      await this.props.setInfo({ ...this.props.info, pw: event.target.value });
    } else if (event.target.id === "pwChk") {
      await this.props.setInfo({ ...this.props.info, pw2: event.target.value });
    }
  }
  render() {
    const inputWrapper = document.createElement("div");
    inputWrapper.setAttribute("class", "input-wrapper");

    if (this.props.type === "basic") {
      const span = document.createElement("span");
      span.innerText = this.props?.txt;
      const input = document.createElement("input");
      input.setAttribute("class", this.props.class);
      input.value = this.props.info.pw || "";

      inputWrapper.append(span, input);
    } else if (this.props.type === "id") {
      const idSpan = document.createElement("span");
      idSpan.innerText = "아이디";
      const idWrapper = document.createElement("div");
      idWrapper.setAttribute("class", "id-wrapper");
      const idInp = document.createElement("input");
      idInp.value = this.props.info.id;
      idInp.setAttribute("class", "id-inp");
      idInp.addEventListener("change", this.onChangeIdInput.bind(this));
      const overlapBtn = document.createElement("button");
      overlapBtn.innerText = "중복확인";
      overlapBtn.addEventListener("click", this.onClickChkId.bind(this));

      idWrapper.append(idInp, overlapBtn);
      const txtSpan = document.createElement("span");
      txtSpan.innerText = this.props.info.idChk ? "멋진 아이디네요!!" : "";
      inputWrapper.append(idSpan, idWrapper, txtSpan);
    } else if (this.props.type === "phone") {
      const span = document.createElement("span");
      span.innerText = this.props.txt;
      const phoneWrapper = document.createElement("div");
      phoneWrapper.setAttribute("class", "phone-wrapper");

      const phoneFirst = document.createElement("select");
      phoneFirst.setAttribute("class", "phone-first");
      const numbers = ["010", "011", "016", "017", "019"];
      numbers.forEach((item) => {
        const opt = document.createElement("option");
        opt.setAttribute("value", item);
        opt.innerText = item;
        phoneFirst.append(opt);
      });
      phoneFirst.addEventListener("change", this.props.onChange);
      phoneFirst.setAttribute("id", "first");
      phoneFirst.value = this.props.info.phone.first;
      phoneFirst.addEventListener("change", this.onChangePhoneInp.bind(this));

      const phoneSecond = document.createElement("input");
      phoneSecond.setAttribute("type", "text");
      phoneSecond.setAttribute("class", "second phone-input");
      phoneSecond.addEventListener("change", this.props.onChange);
      phoneSecond.setAttribute("id", "second");
      phoneSecond.value = this.props.info.phone.second || "";
      phoneSecond.addEventListener("change", this.onChangePhoneInp.bind(this));

      const phoneThird = document.createElement("input");
      phoneThird.setAttribute("type", "text");
      phoneThird.setAttribute("class", "third phone-input");
      phoneThird.addEventListener("change", this.props.onChange);
      phoneThird.setAttribute("id", "third");
      phoneThird.value = this.props.info.phone.third || "";
      phoneThird.addEventListener("change", this.onChangePhoneInp.bind(this));

      phoneWrapper.append(phoneFirst, phoneSecond, phoneThird);
      inputWrapper.append(span, phoneWrapper);
    } else if (this.props.type === "email") {
      const span = document.createElement("div");
      span.innerText = this.props.txt;
      const emailWrapper = document.createElement("div");
      emailWrapper.setAttribute("class", "email-wrapper");

      const emailFirst = document.createElement("input");
      emailFirst.setAttribute("type", "text");
      emailFirst.setAttribute("class", "emailId-input email-input");
      emailFirst.addEventListener(
        "change",
        this.onChangeEmailIdInput.bind(this)
      );
      emailFirst.value = this.props.info?.emailId || "";
      const alpha = document.createElement("span");
      alpha.innerText = "@";

      const emailSecond = document.createElement("input");
      emailSecond.setAttribute("type", "text");
      emailSecond.setAttribute("class", "emailHost-input email-input");
      emailSecond.addEventListener(
        "change",
        this.onChangeEmailHostInput.bind(this)
      );
      emailSecond.value = this.props.info?.emailHost || "";
      emailWrapper.append(emailFirst, alpha, emailSecond);
      inputWrapper.append(span, emailWrapper);
    } else if (this.props.type === "name") {
      const span = document.createElement("span");
      span.innerText = this.props?.txt;
      const input = document.createElement("input");
      input.setAttribute("class", this.props.class);
      input.value = this.props.value || "";
      input.addEventListener("change", this.onChangeNameInp.bind(this));

      inputWrapper.append(span, input);
    } else if (this.props.type === "pw") {
      const span = document.createElement("span");
      span.innerText = this.props?.txt;
      const input = document.createElement("input");
      input.setAttribute("class", this.props.class);
      input.setAttribute("id", this.props.id);
      if (this.props.id === "pw") {
        input.value = this.props.info.pw || "";
      } else {
        input.value = this.props.info.pw2 || "";
      }
      input.addEventListener("blur", this.onChangePwInp.bind(this));

      inputWrapper.append(span, input);
    }

    return inputWrapper;
  }
}

export default Input;
