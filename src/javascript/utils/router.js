class Router {
  constructor(routes) {
    if (!routes) {
      console.log("초기화 실패, 라우트 필요");
    }
    this.routes = routes;
    this.routeParam = {};
    for (const key in routes) {
      const route = routes[key];
      if (key.indexOf(":") > -1) {
        const [_, routeName, param] = key.split("/");
        this.routeParam[routeName] = param.replace(":", "");
        this.routes["/" + routeName] = route;
        delete this.routes[key];
      }
    }
  }

  init(rootElementId) {
    if (!rootElementId) {
      console.log("초기화 실패, rootElementId 필요");
      return null;
    }
    this.rootElementId = rootElementId;

    this.routing(window.location.pathname);
    window.addEventListener("DOMContentLoaded", () => {
      console.log("fwef");
    });
    window.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        e.preventDefault();
        this.routePush(e.target.closest("a").href);
      }
    });
    window.addEventListener("locationchange", (e) => {
      console.log("hihi");
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
      page = component.initialize();
    } else if (param) {
      const routeParam = {};
      routeParam[this.routeParam[routeName]] = param;
      const component = new this.routes["/" + routeName](routeParam);
      page = component.initialize();
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
