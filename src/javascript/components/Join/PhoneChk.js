import { Component, createComponent } from "../../core/index.js";
import Input from "../Input/Input.js";

class PhoneChk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: "",
      third: "",
      isOk: false,
    };
  }
  onChangeInp() {
    if (event.target.id === "first") {
      this.setState({
        ...this.state,
        first: event.target.value,
      });
    } else if (event.target.id === "second") {
      this.setState({
        ...this.state,
        second: event.target.value,
      });
    } else if (event.target.id === "third") {
      this.setState({
        ...this.state,
        third: event.target.value,
      });
    }
    if (
      this.state.first &&
      this.state.second &&
      this.state.third &&
      !this.state.isOk
    ) {
      this.setState({ ...this.state, isOk: true });
      this.props.setInfo({
        ...this.props.info,
        phone: [this.state.first, this.state.second, this.state.third],
      });
    } else if (
      (!this.state.first || !this.state.second || !this.state.third) &&
      this.state.isOk
    ) {
      this.setState({ ...this.state, isOk: false });
    }
    console.log(this.state);
  }
  render() {
    const phoneInputWrapper = createComponent(Input, {
      txt: "휴대폰 번호",
      type: "phone",
      info: this.props.info,
      setInfo: this.props.setInfo,
      phoneInfo: this.state,
      onChange: this.onChangeInp.bind(this),
    });

    return phoneInputWrapper;
  }
}

export default PhoneChk;
