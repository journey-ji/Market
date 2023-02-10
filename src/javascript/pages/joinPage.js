const { Component, createComponent } = require("../core/index.js");
import "../../style/join.css";
import Input from "../components/Input/Input";
import Join from "../components/Join/Join";
import PasswordChk from "../components/Join/PasswordChk";
class JoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const pageContainer = document.createElement("div");
    pageContainer.setAttribute("class", "page-cont");
    const joinContainer = createComponent(Join);
    pageContainer.append(joinContainer);
    return pageContainer;
  }
}
export default JoinPage;
