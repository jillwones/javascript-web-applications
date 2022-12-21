(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
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
          });
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
