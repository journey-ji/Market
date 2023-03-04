import { Component } from "../../core/index.js";

class Button extends Component {
  render() {
    const btn = document.createElement("button");
    btn.style.width = this.props.width;
    btn.style.height = this.props.height;
    btn.innerText = this.props.txt ? this.props.txt : "";
    btn.setAttribute("class", this.props.class);

    btn.style.backgroundColor = this.props.isUnactive ? "white" : "#21BF48";
    btn.style.borderRadius = "5px";
    btn.style.color = this.props.isUnactive ? "black" : "white";
    btn.style.fontSize = "18px";
    btn.style.fontWeight = "500";
    return btn;
  }
}

export default Button;
