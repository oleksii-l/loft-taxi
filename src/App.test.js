import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./index";
import { render, fireEvent } from "@testing-library/react";

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
    expect(getByTestId("login")).toBeTruphy();
  });
});
