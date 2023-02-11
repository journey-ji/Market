import { Component, createComponent } from "../../core/index.js";
import Input from "../Input/Input.js";

class PasswordChk extends Component {
  onChangePwInp() {
    console.log(event.target.value);
    const pwInp = document.querySelector(".pw-inp");
    this.props.setInfo({ ...this.props.info, pw: pwInp.value });

    console.log(this.props);
    if (this.props.info.pw === this.props.info.pw2) {
      this.props.setInfo({ ...this.props.info, pwChk: true });
    } else {
      this.props.setInfo({ ...this.props.info, pwChk: false });
    }
  }
  onChangePwChkInp() {
    const pwChkInp = document.querySelector(".pw-chk-inp");
    this.props.setInfo({ ...this.props.info, pw2: pwChkInp.value });

    if (this.props.info.pw === this.props.info.pw2) {
      this.props.setInfo({ ...this.props.info, pwChk: true });
    } else {
      this.props.setInfo({ ...this.props.info, pwChk: false });
    }
  }
  render() {
    const pwdiv = document.createElement("div");
    const pwInputWrapper = createComponent(Input, {
      txt: "비밀번호",
      type: "basic",
      class: "pw-inp",
      info: this.props.info,
      setInfo: this.props.setInfo,
      value: this.props.info.pw,
    });
    pwInputWrapper.value = this.props.info.pw || "";
    pwInputWrapper.addEventListener("change", this.onChangePwInp.bind(this));
    const pwChkInputWrapper = createComponent(Input, {
      txt: "비밀번호 재확인",
      type: "basic",
      class: "pw-chk-inp",
      info: this.props.info,
      setInfo: this.props.setInfo,
      value: this.props.info.pw2,
    });
    pwChkInputWrapper.addEventListener(
      "change",
      this.onChangePwChkInp.bind(this)
    );
    const span = document.createElement("span");
    span.innerText = this.props.info.pwChk ? "합격" : "불합격";
    pwdiv.append(pwInputWrapper, pwChkInputWrapper, span);
    return pwdiv;
  }
}

export default PasswordChk;
