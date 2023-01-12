import { ProductPage, productDetail } from "./pages/index.js";
import { Router } from "./utils/index.js";

export default class App {
  constructor(props) {
    this.props = props;
  }
  setup() {
    const { el } = this.props;
    const router = new Router({
      "/": ProductPage,
      // "/detail": productDetail,
      "/detail/:id": productDetail,
    });

    router.init(el);
  }
}
