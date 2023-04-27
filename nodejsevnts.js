const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

MyEmitter = new MyEmitter();

MyEmitter.on("waterfull", () => {
  console.log("please turn off the motor!");

  setTimeout(() => {
    console.log("please turn off the motor! its a gentel reminder");
  }, 3000);
});
// MyEmitter.emit("event");
console.log('The sreept is running')
MyEmitter.emit("waterfull");
console.log("The screept is still running");
