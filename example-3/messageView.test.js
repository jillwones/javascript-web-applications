/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("clicks the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();
    const input = document.querySelector("#message-input");
    input.value = "Random text";
    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    expect(document.querySelector("#message").textContent).toEqual(
      "Random text"
    );
  });
  it("removes the message", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    const otherButtonEl = document.querySelector("#hide-message-button");
    otherButtonEl.click();

    expect(document.querySelector("#message")).toBeNull();
  });
});
