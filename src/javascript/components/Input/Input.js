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
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      isOk: false,
    };
  }
  onClickChkId() {
    idCheckAPI(this.state.id).then((data) => {
      if (data?.Success) {
        this.setState({ id: this.state.id, isOk: true });
      }
    });
  }
  onChangeIdInput() {
    const target = document.querySelector(".id-inp");
    this.setState({ id: target.value, isOk: this.state.isOk });
  }
  render() {
    const inputWrapper = document.createElement("div");
    inputWrapper.setAttribute("class", "input-wrapper");
    if (this.props.type === "basic") {
      const span = document.createElement("span");
      span.innerText = this.props?.txt;
      const input = document.createElement("input");
      input.setAttribute("class", this.props.class);
      input.value = this.props?.value || "";

      inputWrapper.append(span, input);
    } else if (this.props.type === "id") {
      const idSpan = document.createElement("span");
      idSpan.innerText = "아이디";
      const idWrapper = document.createElement("div");
      idWrapper.setAttribute("class", "id-wrapper");
      const idInp = document.createElement("input");
      idInp.value = this.state.id;
      idInp.setAttribute("class", "id-inp");
      idInp.addEventListener("change", this.onChangeIdInput.bind(this));
      const overlapBtn = document.createElement("button");
      overlapBtn.innerText = "중복확인";
      overlapBtn.addEventListener("click", this.onClickChkId.bind(this));

      idWrapper.append(idInp, overlapBtn);
      const txtSpan = document.createElement("span");
      txtSpan.innerText = this.state.isOk ? "멋진 아이디네요!!" : "";
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
      const phoneSecond = document.createElement("input");
      phoneSecond.setAttribute("type", "text");
      phoneSecond.setAttribute("class", "phone-input");

      const phoneThird = document.createElement("input");
      phoneThird.setAttribute("type", "text");
      phoneThird.setAttribute("class", "phone-input");

      phoneWrapper.append(phoneFirst, phoneSecond, phoneThird);
      inputWrapper.append(span, phoneWrapper);
    } else if (this.props.type === "email") {
      const span = document.createElement("div");
      span.innerText = this.props.txt;
      const emailWrapper = document.createElement("div");
      emailWrapper.setAttribute("class", "email-wrapper");

      const emailFirst = document.createElement("input");
      emailFirst.setAttribute("type", "text");
      emailFirst.setAttribute("class", "email-input");

      const alpha = document.createElement("span");
      alpha.innerText = "@";

      const emailSecond = document.createElement("input");
      emailSecond.setAttribute("type", "text");
      emailSecond.setAttribute("class", "email-input");

      emailWrapper.append(emailFirst, alpha, emailSecond);
      inputWrapper.append(span, emailWrapper);
    }

    return inputWrapper;
  }
}

export default Input;
