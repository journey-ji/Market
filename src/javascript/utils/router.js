class Router {
  constructor(routes) {
    if (!routes) {
      console.log("초기화 실패, 라우트 필요");
    }
    this.routes = routes;

    for (const key in routes) {
      const route = routes[key];
      if (key.indexOf(":") > -1) {
        const [_, routeName, ...param] = key.split("/");
        this.routes["/" + routeName] = route;
        delete this.routes[key];
      }
    }
    console.log(this.routes);
  }

  init(rootElementId) {
    if (!rootElementId) {
      console.log("초기화 실패, rootElementId 필요");
      return null;
    }
    this.rootElementId = rootElementId;

    this.routing(window.location.pathname);

    window.addEventListener("click", (e) => {
      // if (e.target.tagName.toLowerCase() === "a") {
      //   e.preventDefault();
      //   this.routePush(e.target.href);
      // }

      if (e.target.closest("a")) {
        e.preventDefault();
        this.routePush(e.target.closest("a").href);
      }
    });
    window.onpopstate = () => this.routing(window.location.pathname);
  }
  routePush(pathname) {
    window.history.pushState({}, null, pathname);
    this.routing(window.location.pathname);
  }

  routing(pathname) {
    const [_, routeName, ...param] = pathname.split("/");
    let page = "";

    if (this.routes[pathname]) {
      const component = new this.routes[pathname]();
      page = component.render();
    } else if (param) {
      const component = new this.routes["/" + routeName](param);
      page = component.render();
    }
    if (page) {
      this.render(page);
    }
  }
  render(page) {
    const rootElement = document.querySelector(this.rootElementId);
    rootElement.innerHTML = "";
    rootElement.appendChild(page);
  }
}
export default Router;
