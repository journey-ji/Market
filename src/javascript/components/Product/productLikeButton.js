import Component from "../../core/Component.js";

class ProductLikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.checkLikeList(),
    };
  }
  checkLikeList() {
    if (!localStorage.getItem("likeList")) {
      localStorage.setItem("likeList", JSON.stringify([]));
    }
    const likeList = JSON.parse(localStorage.getItem("likeList"));

    return likeList.includes(this.props.id);
  }

  changeLiked() {
    const likeList = JSON.parse(localStorage.getItem("likeList"));
    if (this.checkLikeList()) {
      const newLikeList = likeList.filter((id) => id != this.props.id);
      localStorage.setItem("likeList", JSON.stringify(newLikeList));
    } else {
      likeList.push(this.props.id);
      localStorage.setItem("likeList", JSON.stringify(likeList));
    }
    this.setState({ liked: this.checkLikeList() });
  }

  render() {
    const likeButton = document.createElement("button");
    likeButton.setAttribute("class", "like-btn");
    this.state.liked && likeButton.classList.add("on");

    const likeButtonIr = document.createElement("span");
    likeButtonIr.setAttribute("class", "ir");
    likeButtonIr.innerText = "좋아요 버튼";

    likeButton.appendChild(likeButtonIr);
    likeButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.changeLiked();

      console.log(this.state.liked);
    });
    return likeButton;
  }
}

export default ProductLikeButton;
