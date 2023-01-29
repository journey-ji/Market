import {
  MainPage,
  ProductDetail,
  ProductDetail2,
  ProductPage,
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
      "/detail/:id": ProductDetail,
      "/products/:id": ProductDetail2,
      "/test": ProductPage,
    });
    router.init(el);
  }
}
