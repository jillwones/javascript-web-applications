class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");

    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });

    this.otherButtonEl = document.querySelector("#hide-message-button");

    this.otherButtonEl.addEventListener("click", () => {
      this.removeMessage();
    });
  }

  displayMessage() {
    const div = document.createElement("div");
    const input = document.querySelector("#message-input");
    div.textContent = input.value;
    div.id = "message";
    document.querySelector("#main-container").append(div);
    console.log(input.value);
  }

  removeMessage() {
    document.querySelectorAll("#message").forEach((message) => {
      message.remove();
    })
  }
}

module.exports = MessageView;
