import { Component } from "../../core";
import logoImg from "../../../assets/Logo-hodu.png";
class Logo extends Component {
  render() {
    const logo = document.createElement("img");
    logo.setAttribute("src", logoImg);
    logo.style.display = "block";
    logo.style.width = this.props.width;
    logo.style.height = this.props.height;
    logo.style.margin = this.props.margin;

    return logo;
  }
}

export default Logo;
