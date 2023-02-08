const { Component } = require("../core/index.js");
import "../../style/join.css";
class JoinPage extends Component {
  render() {
    const pageContainer = document.createElement("div");
    const joinContainer = document.createElement("article");
    const headLogo = document.createElement("img");
    headLogo.setAttribute("class", "logo");
    const joinWrapper = document.createElement("div");
    joinWrapper.setAttribute("class", "join-wrapper");

    //
    const joinTypeWrapper = document.createElement("div");
    joinTypeWrapper.setAttribute("class", "join-type-wrapper");

    const customerJoin = document.createElement("span");
    customerJoin.setAttribute("class", "customer-join");
    customerJoin.innerText = "구매회원 가입";
    const sellerJoin = document.createElement("span");
    sellerJoin.setAttribute("class", "seller-join");
    sellerJoin.innerText = "판매회원 가입";

    joinTypeWrapper.append(customerJoin, sellerJoin);

    const joinArea = document.createElement("div");
    joinArea.setAttribute("class", "join-area");

    // 아이디 확인
    const idInputWrapper = document.createElement("div");
    idInputWrapper.setAttribute("class", "input-wrapper");
    const idSpan = document.createElement("span");
    idSpan.innerText = "아이디";
    const idWrapper = document.createElement("div");
    idWrapper.setAttribute("class", "id-wrapper");
    const idInp = document.createElement("input");
    idInp.setAttribute("class", "id-inp");
    const overlapBtn = document.createElement("button");
    overlapBtn.innerText = "중복확인";
    idWrapper.append(idInp, overlapBtn);
    const txtSpan = document.createElement("span");
    txtSpan.innerText = "멋진 아이디네요!";
    idInputWrapper.append(idSpan, idWrapper, txtSpan);

    // 비밀번호
    const pwInputWrapper = document.createElement("div");
    pwInputWrapper.setAttribute("class", "input-wrapper");
    const pwSpan = document.createElement("span");
    pwSpan.innerText = "비밀번호";
    const pwInp = document.createElement("input");
    pwInp.setAttribute("class", "pw-inp");
    pwInputWrapper.append(pwSpan, pwInp);

    joinArea.append(idInputWrapper, pwInputWrapper);

    joinWrapper.append(joinTypeWrapper, joinArea);
    joinContainer.append(joinWrapper);
    pageContainer.append(joinContainer);
    return pageContainer;
  }
}
export default JoinPage;
/**
 *       <h1 class="ir header">호두</h1>
      <article class="join-article">
        <img src="./src/assets/Logo-hodu.png" alt="메인 로고" class="logo" />
        <div class="join-wrapper">
          <div class="join-type-wrapper">
            <span class="customer-join selected">구매회원 가입</span>
            <span class="seller-join">판매회원 가입</span>
          </div>
          <div class="join-area">
            <div class="input-wrapper">
              <span>아이디</span>
              <div class="id-wrapper">
                <input type="text" placeholder="아이디" class="id-inp" />
                <button>중복확인</button>
              </div>
              <span>정말 멋진 아이디네요!</span>
            </div>

            <div class="input-wrapper">
              <span>비밀번호</span>
              <input type="password" placeholder="비밀번호" class="pw-inp" />
            </div>
            <div class="input-wrapper">
              <span>비밀번호 재확인</span>
              <input
                type="password"
                placeholder="비밀번호 재확인"
                class="pw-inp"
              />
            </div>
            <div class="input-wrapper">
              <span>이름</span>
              <input type="text" placeholder="이름" class="id-inp" />
            </div>
            <div class="input-wrapper">
              <span>휴대폰번호</span>
              <div class="phone-wrapper">
                <select name="sel-num" id="" class="phone-first">
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="019">019</option>
                </select>
                <input type="text" class="phone-input" />
                <input type="text" class="phone-input" />
              </div>
            </div>
            <div class="input-wrapper">
              <span>이메일</span>
              <div class="email-wrapper">
                <input type="text" name="" id="" class="email-input" />
                <span>@</span>
                <input type="text" name="" id="" class="email-input" />
              </div>
            </div>

            <!-- 아래는 판매회원여부에 따라 추가 -->
            <div class="input-wrapper">
              <span>사업자 등록번호</span>
              <div class="ent-wrapper">
                <input type="text" class="ent-input" />
                <button class="">인증</button>
              </div>
            </div>
            <div class="input-wrapper">
              <span>스토어 이름</span>
              <input type="text" />
            </div>
          </div>
          <div class="terms-wrapper">
            <input type="checkbox" />
            <span
              >호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
              동의합니다.</span
            >
          </div>
          <button type="button" class="join-btn">가입하기</button>
        </div>
      </article>
 */
