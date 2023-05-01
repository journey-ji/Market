import { Component } from "../../core";
import logoImg from "../../../assets/test.png";
import './Logo.css'
class Logo extends Component {
  render() {
    const logo = document.createElement("img");
    logo.setAttribute('class','logo-img')
    logo.setAttribute("src", logoImg);
    logo.setAttribute('alt','웹페이지 로고')
    logo.style.display = "block";
    logo.style.width = this.props.width;
    logo.style.height = this.props.height;
    logo.style.margin = this.props.margin;
    

    return logo;
  }
}

export default Logo;
