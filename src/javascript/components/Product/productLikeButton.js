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

    return likeList.includes(this.props.productId);
  }

  changeLiked() {
    const likeList = JSON.parse(localStorage.getItem("likeList"));
    if (this.checkLikeList()) {
      const newLikeList = likeList.filter((id) => id != this.props.productId);
      localStorage.setItem("likeList", JSON.stringify(newLikeList));
    } else {
      likeList.push(this.props.productId);
      localStorage.setItem("likeList", JSON.stringify(likeList));
    }
    this.setState({ liked: this.checkLikeList() });
  }

  // Component 클래스에서는 렌더에서 요소를만들고 컴포넌트를 생성
  // 요소를 직접 조작하는것은 규칙에 맞지 않는다.
  // 렌더에서 this.liked에 맞춰 렌더링하자
  // 클릭했을때는 this.liked 만 바꿔줌

  // const likeList = JSON.parse(localStorage.getItem("likeList"));

  // this.liked = !this.liked;
  // this.liked && likeList.push(this.props.productId);
  // const newLikeList = this.liked
  //   ? likeList
  //   : likeList.filter((id) => id != this.props.productId);
  // localStorage.setItem("likeList", JSON.stringify(newLikeList));

  // this.liked
  //   ? e.target.classList.add("on")
  //   : e.target.classList.remove("on");

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

/**
 * 소비의 미학
 * 2020 mvp
 *
 * 버스 예약 서비스
 *
 * 태그바이
 * 합리적이고 효율적인 기업
 * 변화에 맞물려 성장하는 기업
 * 시리즈 a투자 예상
 * 그리드위즈
 * 튜닙 : 인공지능 인플루언서
 * 쓰리덕스 : 점심저녁준다
 * native -> 웹 진행
 */
