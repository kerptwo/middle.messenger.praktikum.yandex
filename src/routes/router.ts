import Block from "../components/Block";
import LoginPage from "../pages/Login/Login";
import RegistrationPage from "../pages/Registration/Registration";
import ChatPage from "../pages/Chat/Chat";
import ProfilePage from "../pages/Profile/Profile";
import ChangeUserInfoPage from "../pages/ChangeUserInfo/ChangeUserInfo";
import ChangePasswordPage from "../pages/ChangePassword/ChangePassword";
import ServerErrorPage from "../pages/ServerError/ServerError";
import NotFoundPage from "../pages/NotFound/NotFound";

interface Route {
  path: string;
  component: new () => Block;
}

const routes: Route[] = [
  { path: "/", component: LoginPage },
  { path: "/registration", component: RegistrationPage },
  { path: "/chat", component: ChatPage },
  { path: "/profile", component: ProfilePage },
  { path: "/changeUserInfo", component: ChangeUserInfoPage },
  { path: "/changePassword", component: ChangePasswordPage },
  { path: "/serverError", component: ServerErrorPage },
];

function renderPage(page: Block): void {
  const appDiv = document.getElementById("app");
  if (appDiv) {
    appDiv.innerHTML = "";
    appDiv.appendChild(page.render());
    if (typeof (page as any).afterRender === "function") {
      (page as any).afterRender();
    }
  }
}

export function router(): void {
  const currentPath = window.location.pathname;
  const route = routes.find((r) => r.path === currentPath);

  if (route) {
    const page = new route.component();
    renderPage(page);
  } else {
    const notFoundPage = new NotFoundPage();
    renderPage(notFoundPage);
  }
}

export function navigateTo(url: string): void {
  history.pushState(null, "", url);
  router();
}

export function initRouter(): void {
  document.body.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.matches("[data-link]")) {
      event.preventDefault();
      const url = target.getAttribute("href");
      if (url) {
        navigateTo(url);
      }
    }
  });

  window.addEventListener("popstate", router);
}
