import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering Header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  //check if header is loaded
  expect(logo[0].src).toBe(
    "https://s3.amazonaws.com/thumbnails.venngage.com/template/9f596769-790d-4b5f-bb80-668016a9c920.png"
  );
});

test("Online status should be green on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");

  //check if default is online
  expect(onlineStatus.innerHTML).toBe("🟢");
});

test("Cart should have 0 items on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");

  //check if default is online
  expect(cart.innerHTML).toBe(
    '<a href="/cart"><i class="fa-solid fa-cart-arrow-down"></i> Cart-0</a>'
  );
});
