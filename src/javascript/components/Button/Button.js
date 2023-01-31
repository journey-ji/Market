import { Component } from "../../core/index.js";

class Button extends Component {
  render() {
    const btn = document.createElement("button");
    btn.style.width = this.props.width;
    btn.style.height = this.props.height;
    btn.innerText = this.props.txt;
    btn.setAttribute("class", this.props.class);
    return btn;
  }
}

export default Button;
