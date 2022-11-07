const getNewAnswer = require("./getNewAnswer");
const { Console } = require("@woowacourse/mission-utils");
const Message = require("./Message");
const checkException = require("./checkException");
const getResult = require("./getResult");
const { printStart } = require("./printMessage");

class App {
  constructor() {
    this.answer = getNewAnswer();
  }

  play() {
    printStart();
    this.getUserInput();
  }

  getUserInput() {
    Console.readLine(`${Message.input}`, (userInput) => {
      checkException(userInput);
      const result = getResult(this.answer, userInput);
      console.log(result);
      Console.close();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
