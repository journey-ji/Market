import { Component, createComponent } from "../../core/index.js";
import Input from "../Input/Input.js";

class PasswordChk extends Component {
  onChangePwInp() {
    console.log(this.props.info);
    this.props.setInfo({
      ...this.props.info,
      pw: event.target.value,
      test: "test",
    });
    if (this.props.info.pw === this.props.info.pw2) {
      this.props.setInfo({ ...this.props.info, pwChk: true });
    } else {
      this.props.setInfo({ ...this.props.info, pwChk: false });
    }
  }
  onChangePwChkInp() {}
  render() {
    const pwdiv = document.createElement("div");
    const pwInputWrapper = createComponent(Input, {
      txt: "비밀번호",
      type: "pw",
      class: "pw-inp",
      id: "pw",
      info: this.props.info,
      setInfo: this.props.setInfo,
      value: this.props.info.pw,
    });
    pwInputWrapper.value = this.props.info.pw || "";

    const pwChkInputWrapper = createComponent(Input, {
      txt: "비밀번호 재확인",
      type: "pw",
      class: "pw-chk-inp",
      id: "pwChk",
      info: this.props.info,
      setInfo: this.props.setInfo,
      value: this.props.info.pw2,
    });
    pwChkInputWrapper.addEventListener("focusout", console.log("아웃"));
    const span = document.createElement("span");
    span.innerText = this.props.info.pwChk ? "합격" : "불합격";
    pwdiv.append(pwInputWrapper, pwChkInputWrapper, span);
    return pwdiv;
  }
}

export default PasswordChk;
