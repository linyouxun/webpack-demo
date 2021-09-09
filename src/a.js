import { B } from "./b";

export function A() {
  console.log("a");
}

export default function AF() {
  console.log("AF");
}

export function A2() {
  console.log("a2");
}

function A3() {
  console.log("A3");
}

A3();
B();
