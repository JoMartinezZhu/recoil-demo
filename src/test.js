import { run, setState, getState } from "concent";

run({
  counter: {
    state: { num: 1 }
  }
});

console.log(getState('counter').num);
setState('couter', {num:10});
console.log(getState('counter').num);