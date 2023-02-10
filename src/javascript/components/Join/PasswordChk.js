import { Component, createComponent } from "../../core/index.js";
import Input from "../Input/Input.js";

class PasswordChk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pwInp: "",
      pwChkInp: "",
      isOk: false,
    };
  }
  onChangePwInp() {
    const pwInp = document.querySelector(".pw-inp");
    this.setState({
      pwInp: pwInp.value,
      pwChkInp: this.state.pwChkInp,
      isOk: this.state.isOk,
    });

    if (this.state.pwInp === this.state.pwChkInp) {
      this.setState({
        pwInp: this.state.pwInp,
        pwChkInp: this.state.pwChkInp,
        isOk: true,
      });
    } else {
      this.setState({
        pwInp: this.state.pwInp,
        pwChkInp: this.state.pwChkInp,
        isOk: false,
      });
    }
  }
  onChangePwChkInp() {
    const pwChkInp = document.querySelector(".pw-chk-inp");
    this.setState({
      pwInp: this.state.pwInp,
      pwChkInp: pwChkInp.value,
      isOk: this.state.isOk,
    });
    if (this.state.pwInp === this.state.pwChkInp) {
      this.setState({
        pwInp: this.state.pwInp,
        pwChkInp: this.state.pwChkInp,
        isOk: true,
      });
    } else {
      this.setState({
        pwInp: this.state.pwInp,
        pwChkInp: this.state.pwChkInp,
        isOk: false,
      });
    }
  }
  render() {
    const pwdiv = document.createElement("div");

    const pwInputWrapper = createComponent(Input, {
      txt: "비밀번호",
      type: "basic",
      class: "pw-inp",
      value: this.state.pwInp,
    });

    pwInputWrapper.addEventListener("change", this.onChangePwInp.bind(this));
    const pwChkInputWrapper = createComponent(Input, {
      txt: "비밀번호 재확인",
      type: "basic",
      class: "pw-chk-inp",
      value: this.state.pwChkInp,
    });
    pwChkInputWrapper.addEventListener(
      "change",
      this.onChangePwChkInp.bind(this)
    );
    const span = document.createElement("span");
    span.innerText = this.state.isOk ? "합격" : "불합격";
    pwdiv.append(pwInputWrapper, pwChkInputWrapper, span);
    return pwdiv;
  }
}

export default PasswordChk;
