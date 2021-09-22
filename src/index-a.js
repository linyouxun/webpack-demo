import { A } from "./a";
import { B } from "./b";
B();
A();
(() => {
  const Fun = import("./c");
  Fun();
})();
