import {
  MainPage,
  ProductDetail,
  ProductDetail2,
  ProductPage,
  JoinPage,
} from "./pages/index.js";
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
      "/detail/:id": ProductDetail,
      "/products/:id": ProductDetail2,
      "/products/*": ProductDetail2,
      "/test": ProductPage,
      "/*": MainPage,
    });
    router.init(el);
  }
}
