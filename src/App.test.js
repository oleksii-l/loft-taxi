import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

describe("Тестировнаие компонента App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("With Login page", () => {
  it("show login page", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("login")).toBeTruthy();
  });
});
