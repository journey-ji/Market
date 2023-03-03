import CartPage from "./pages/cartPage.js";
import {
  MainPage,
  ProductDetail,
  ProductDetail2,
  ProductPage,
  JoinPage,
} from "./pages/index.js";
import LoginPage from "./pages/loginPage.js";
import SellerCenterPage from "./pages/sellerCenterPage.js";
import { Router } from "./utils/index.js";

export default class App {
  constructor(props) {
    this.props = props;
  }
  setup() {
    const { el } = this.props;
    const router = new Router({
      "/": MainPage,
      "/join": JoinPage,
      "/login": LoginPage,
      "/cart": CartPage,
      "/seller": SellerCenterPage,
      "/detail/:id": ProductDetail,
      "/products/:id": ProductDetail2,
      "/products/*": ProductDetail2,
      "/test": ProductPage,
      "/*": MainPage,
    });
    router.init(el);
  }
}
