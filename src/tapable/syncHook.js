const { SyncHook } = require("tapable");

class Person {
  hooks = {};
  constructor() {
    this.hooks = { sleep: new SyncHook(["t"]) };
  }
  sleep(t) {
    this.hooks.sleep.call(t);
  }
}
const p = new Person();
p.hooks.sleep.tap("test1", function (...data) {
  console.log("test1", data);
  return 23;
});
p.hooks.sleep.tap("test2", function (...data) {
  console.log("test2", data);
  return "ws";
});
p.hooks.sleep.tap("test3", function (...data) {
  console.log("test3", data);
});

p.sleep(2);
