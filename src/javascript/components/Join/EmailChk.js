import { Component, createComponent } from "../../core/index.js";
import Input from "../Input/Input.js";

class EmailChk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      emailHost: "",
    };
  }
  render() {
    const emailInputWrapper = createComponent(Input, {
      txt: "이메일",
      type: "email",
      class: "email-inp",
      info: this.props.info,
      setInfo: this.props.setInfo,
    });

    return emailInputWrapper;
  }
}

export default EmailChk;
