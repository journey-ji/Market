class ProductLikeButton {
  constructor(id) {
    this.productId = id;
    this.liked = this.checkLikList();
  }
  checkLikList() {
    if (!localStorage.getItem("likeList")) {
      localStorage.setItem("likeList", JSON.stringify([]));
    }
    const likeList = JSON.parse(localStorage.getItem("likeList"));

    return likeList.includes(this.productId);
  }
  addClickEvent(likeButton) {
    likeButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const likeList = JSON.parse(localStorage.getItem("likeList"));

      this.liked = !this.liked;
      this.liked && likeList.push(this.productId);
      const newLikeList = this.liked
        ? likeList
        : likeList.filter((id) => id != this.productId);
      localStorage.setItem("likeList", JSON.stringify(newLikeList));

      this.liked
        ? e.target.classList.add("on")
        : e.target.classList.remove("on");
      console.log("좋아요버튼 클릭");
    });
  }
  render() {
    const likeButton = document.createElement("button");
    likeButton.setAttribute("class", "like-btn");
    this.liked && likeButton.classList.add("on");

    const likeButtonIr = document.createElement("span");
    likeButtonIr.setAttribute("class", "ir");
    likeButtonIr.innerText = "좋아요 버튼";

    likeButton.appendChild(likeButtonIr);
    this.addClickEvent(likeButton);
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
