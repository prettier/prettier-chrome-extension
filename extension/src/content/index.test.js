import "@testing-library/jest-dom/extend-expect";

window.chrome = {
  storage: {
    sync: {
      get(callback) {
        callback({});
      }
    }
  }
};

const { createGithubPrettierButtons, initStackOverflowButton } = require(".");

describe("Prettier format button", () => {
  function expectToHavePrettierButton() {
    expect(document.querySelector(".prettier-btn")).toHaveTextContent(
      "Prettier"
    );
  }

  beforeEach(() => (document.body.innerHTML = ""));

  it("is injected on GitHub", () => {
    // Basis: https://github.com/prettier/prettier-chrome-extension/issues/new
    const button = document.createElement("button");
    button.innerText = "Comment";
    document.body.appendChild(button);

    createGithubPrettierButtons();
    expectToHavePrettierButton();
  });

  it("is injected on Stack Overflow", () => {
    // Basis: https://stackoverflow.com/questions/51875054
    const button = document.createElement("div");
    button.className = "wmd-button-row";
    document.body.appendChild(button);

    initStackOverflowButton();
    expectToHavePrettierButton();
  });
});
