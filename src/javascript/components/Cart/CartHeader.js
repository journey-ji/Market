import { Component } from "../../core/index.js";

class CartHeader extends Component {
  render() {
    const contentsHeader = document.createElement("div");
    contentsHeader.setAttribute("class", "contents-header");
    contentsHeader.innerHTML = `<input type="checkbox" />
    <p>상품정보</p>
    <p>수량</p>
    <p>상품금액</p>
    `;

    return contentsHeader;
  }
}

export default CartHeader;

/**
 *       <div class="page-wrapper">
        <h1>장바구니</h2>
        <div class="contents-header">
          <input type="checkbox" />
          <p>상품정보</p>
          <p>수량</p>
          <p>상품금액</p>
        </div>
        <div class="contents">
          <ul class="cart-product-list">
            <li class="cart-product-item">
              <input type="checkbox" />
              <div class="item-info">
                <img src="./src/assets/img-item-template.png" alt="" />
                <div>
                  <p>백엔드글로벌</p>
                  <a>딥러닝 개발자 무릎 담요</a>
                  <span><em>17500</em>원</span>
                  <span>택배배송 / 무료배송</span>
                </div>
              </div>
              <div class="수량"></div>
              <div class="unit-price">
                <span><em>17500</em>원</span>
                <button>주문하기</button>
              </div>
            </li>
            <li class="cart-product-item">
              <input type="checkbox" />
              <div class="item-info">
                <img src="./src/assets/img-item-template.png" alt="" />
                <div>
                  <p>백엔드글로벌</p>
                  <a>딥러닝 개발자 무릎 담요</a>
                  <span><em>17500</em>원</span>
                  <span>택배배송 / 무료배송</span>
                </div>
              </div>
              <div class="수량"></div>
              <div class="unit-price">
                <span><em>17500</em>원</span>
                <button>주문하기</button>
              </div>
            </li>
            <li class="cart-product-item">
              <input type="checkbox" />
              <div class="item-info">
                <img src="./src/assets/img-item-template.png" alt="" />
                <div>
                  <p>백엔드글로벌</p>
                  <a>딥러닝 개발자 무릎 담요</a>
                  <span><em>17500</em>원</span>
                  <span>택배배송 / 무료배송</span>
                </div>
              </div>
              <div class="수량"></div>
              <div class="unit-price">
                <span><em>17500</em>원</span>
                <button>주문하기</button>
              </div>
            </li>
          </ul>
          <div class="cart-total-price">
            <div class="cart-total-price__inner">
              <div></div>
              <div>
                <span>총 상품금액</span>
                <span><em>46500</em> 원</span>
              </div>
              <span class="minus">
                <img src="./src/assets/minus-icon-bg-white.svg" alt="빼기" />
                <span class="ir">빼기</span>
              </span>
              <div>
                <span>상품 할인</span>
                <span><em>0</em> 원</span>
              </div>
              <span class="plus">
                <img src="./src/assets/plus-icon-bg-white.svg" alt="" />
                <span class="ir">더하기</span>
              </span>
              <div>
                <span>배송비</span>
                <span><em>0</em> 원</span>
              </div>
              <div></div>
              <div>
                <span>결제 예정 금액</span>
                <span><em>46500</em> 원</span>
              </div>
            </div>
          </div>
          <button class="go-pay-btn">주문하기</button>
        </div>
      </div>
 */
