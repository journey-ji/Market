import { Component } from "../../core/index.js";
import "./modal.css";
class Modal extends Component {
  render() {
    const modalWrapper = document.createElement("div");
    modalWrapper.setAttribute("class", "modal-wrapper ir");
    modalWrapper.id = "myPageModal";
    const modalCont = document.createElement("div");
    modalCont.setAttribute("class", "modal-cont");

    const myPage = document.createElement("a");
    myPage.innerText = "마이페이지";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    const logout = document.createElement("button");
    logout.innerText = "로그아웃";
    logout.type = "button";
    logout.addEventListener("click", () => {
      localStorage.removeItem("loginToken");
      alert("로그아웃되었습니다.");
      location.href = "/";
    });

    modalCont.append(myPage, logout);
    modalWrapper.append(modalCont);
    return modalWrapper;
  }
}

export default Modal;